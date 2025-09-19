import { ReactNode } from 'react';

interface ContentSectionProps {
  children: ReactNode;
  className?: string;
}

const ContentSection = ({ children, className = "" }: ContentSectionProps) => {
  return (
    <section className={`mb-8 ${className}`}>
      {children}
    </section>
  );
};

export default ContentSection;