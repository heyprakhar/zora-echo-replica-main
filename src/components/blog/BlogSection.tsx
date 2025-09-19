import React from 'react';

interface BlogSectionProps {
  id?: string;
  title: string;
  level?: 'h2' | 'h3' | 'h4';
  children: React.ReactNode;
  className?: string;
}

const BlogSection: React.FC<BlogSectionProps> = ({
  id,
  title,
  level = 'h2',
  children,
  className = ''
}) => {
  const HeadingTag = level;

  const headingClasses = {
    h2: "text-3xl font-playfair font-bold text-luxury-text mb-6 mt-12",
    h3: "text-2xl font-playfair font-bold text-luxury-gold mb-4 mt-8",
    h4: "text-xl font-semibold text-luxury-text mb-3 mt-6"
  };

  return (
    <section id={id} className={`prose prose-lg max-w-none ${className}`}>
      <HeadingTag className={headingClasses[level]}>
        {title}
      </HeadingTag>
      {children}
    </section>
  );
};

export default BlogSection;