import React from 'react';

const TAGS = [
  '# serverless',
  '# bedrock',
  '# containers',
  '# observabilidad',
  '# clf-c02',
  '# data',
  '# genai',
  '# security',
  '# lambda',
  '# dynamodb',
  '# s3',
  '# architecture',
];

export const MarqueeTags: React.FC = () => {
  // Duplicate tags array multiple times for smooth infinite scroll
  const duplicatedTags = [...TAGS, ...TAGS, ...TAGS, ...TAGS];

  return (
    <div className="w-full py-5 bg-sbg-base border-y border-sbg-division/40 overflow-hidden select-none relative z-20">
      {/* Gradient edge masks for smooth fade out */}
      <div className="absolute left-0 top-0 bottom-0 w-16 bg-linear-to-r from-sbg-base to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 bg-linear-to-l from-sbg-base to-transparent z-10 pointer-events-none" />

      <div className="animate-marquee flex items-center gap-3 whitespace-nowrap">
        {duplicatedTags.map((tag, index) => (
          <span
            key={`${tag}-${index}`}
            className="bg-sbg-card border border-sbg-division/60 text-slate-300 hover:text-sbg-secondary hover:border-sbg-secondary/60 text-xs font-mono px-3.5 py-1.5 rounded-md transition-colors cursor-pointer inline-flex items-center gap-1 shadow-sm"
          >
            <span className="text-sbg-secondary/70 font-semibold">#</span>
            {tag.replace('# ', '')}
          </span>
        ))}
      </div>
    </div>
  );
};
