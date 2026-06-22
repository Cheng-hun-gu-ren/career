import React from 'react';

interface SectionHeadingProps {
  label: string;
  title: string;
  description?: string;
  className?: string;
}

export default function SectionHeading({ label, title, description, className = '' }: SectionHeadingProps) {
  return (
    <div className={`text-center mb-16 ${className}`}>
      <p className="section-label mb-4">{label}</p>
      <h2 className="font-display text-3xl md:text-4xl font-semibold text-ink-deep mb-4">
        {title}
      </h2>
      {description && (
        <p className="text-lg text-ink-muted max-w-2xl mx-auto leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}