import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';
import { test } from 'node:test';
import { awsServices, serviceCategories } from '../src/data/services.ts';
import { DEFAULT_SERVICE_FILTERS, filterServices } from '../src/utils/services.ts';

const select = (changes = {}) => filterServices(awsServices, { ...DEFAULT_SERVICE_FILTERS, ...changes });

test('the catalog has 136 unique services, covers every category, and has local icons', () => {
  assert.equal(awsServices.length, 136);
  assert.equal(new Set(awsServices.map((service) => service.id)).size, 136);
  assert.equal(serviceCategories.length, 20);
  for (const category of serviceCategories.filter((category) => category !== 'todas')) {
    assert.ok(awsServices.some((service) => service.category === category), category);
  }
  for (const service of awsServices) {
    assert.ok(Number.isInteger(service.popularityScore) && service.popularityScore >= 0 && service.popularityScore <= 100);
    assert.ok(service.description.length > 20);
    assert.equal(new URL(service.link).origin, 'https://docs.aws.amazon.com');
    if (service.icon !== 'robotics') {
      const iconPath = new URL(`../public${service.icon}`, import.meta.url);
      assert.ok(existsSync(iconPath), service.icon);
      const svg = readFileSync(iconPath, 'utf8');
      assert.match(svg, /<svg\s/);
      assert.doesNotMatch(svg, /<script|<foreignObject|\son[a-z]+\s*=/i);
    }
  }
});

test('the initial results reproduce the six reference cards and scores', () => {
  assert.deepEqual(select().slice(0, 6).map(({ name, popularityScore }) => [name, popularityScore]), [
    ['Amazon EC2', 98], ['Amazon S3', 97], ['AWS Lambda', 95],
    ['AWS Auto Scaling', 95], ['AWS IAM', 94], ['Amazon RDS', 92],
  ]);
});

test('search ignores accents, case and extra whitespace and matches all query words', () => {
  assert.deepEqual(select({ query: '  COMPUTO  ' }), select({ query: 'cómputo' }));
  assert.ok(select({ query: '  COMPUTO  ' }).some(({ name }) => name === 'Amazon EC2'));
  assert.deepEqual(select({ query: '  LAMBDA  AWS ' }).map(({ name }) => name), ['AWS Lambda', 'AWS CodeDeploy']);
  assert.deepEqual(select({ query: '  serverless LAMBDA AWS ' }).map(({ name }) => name), ['AWS Lambda']);
  assert.ok(select({ query: 'postgresql' }).some(({ name }) => name === 'Amazon RDS'));
  assert.equal(select({ query: '   ' }).length, 136);
});

test('search, category and rating intersect without resetting each other', () => {
  assert.deepEqual(select({ query: 'amazon', category: 'almacenamiento', rating: 90 }).map(({ name }) => name), ['Amazon S3', 'Amazon EBS']);
  assert.equal(select({ query: 'Lambda', category: 'almacenamiento', rating: 90 }).length, 0);
});

test('rating thresholds include exact boundaries and exclude lower scores', () => {
  for (const threshold of [70, 80, 90]) {
    const results = select({ rating: threshold });
    assert.ok(results.length > 0);
    assert.ok(results.some(({ popularityScore }) => popularityScore === threshold));
    assert.ok(results.every(({ popularityScore }) => popularityScore >= threshold));
    assert.equal(results.length, awsServices.filter(({ popularityScore }) => popularityScore >= threshold).length);
  }
});

test('all categories and rating thresholds combine with every ordering option', () => {
  for (const category of serviceCategories) {
    for (const rating of ['todos', 70, 80, 90]) {
      const expected = awsServices.filter((service) => (category === 'todas' || service.category === category) && (rating === 'todos' || service.popularityScore >= rating));
      for (const sort of ['popular', 'a-z', 'categoría']) {
        const results = select({ category, rating, sort });
        assert.equal(results.length, expected.length);
        assert.deepEqual(new Set(results.map(({ id }) => id)), new Set(expected.map(({ id }) => id)));
      }
    }
  }
});

test('sorting follows Spanish names/categories, descending popularity, and leaves data unchanged', () => {
  const before = structuredClone(awsServices);
  const collator = new Intl.Collator('es', { sensitivity: 'base', numeric: true });
  for (const sort of ['a-z', 'categoría', 'popular']) {
    const results = select({ sort });
    for (let index = 1; index < results.length; index++) {
      const previous = results[index - 1];
      const current = results[index];
      const comparison = sort === 'popular' ? current.popularityScore - previous.popularityScore
        : sort === 'a-z' ? collator.compare(previous.name, current.name)
          : collator.compare(previous.category, current.category) || collator.compare(previous.name, current.name);
      assert.ok(comparison <= 0);
    }
  }
  assert.deepEqual(awsServices, before);
});

test('no-match queries return an empty list and default filters restore all services', () => {
  assert.deepEqual(select({ query: 'no-existe-este-servicio-12345' }), []);
  assert.deepEqual(filterServices([], DEFAULT_SERVICE_FILTERS), []);
  assert.equal(select().length, 136);
});
