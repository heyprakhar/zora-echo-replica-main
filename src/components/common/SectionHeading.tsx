import React from 'react';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  level?: 'h2' | 'h3';
  className?: string;
}

const SectionHeading = ({
  title,
  subtitle,
  level = 'h2',
  className = ""
}: SectionHeadingProps) => {
  const HeadingTag = level;
  const headingClasses = level === 'h2'
    ? "text-2xl font-playfair font-bold text-luxury-gold mb-4"
    : "text-xl font-semibold text-luxury-text mt-6 mb-3";

  return (
    <div className={className}>
      <HeadingTag className={headingClasses}>
        {title}
      </HeadingTag>
      {subtitle && (
        <p className="text-luxury-text-muted mb-4">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;