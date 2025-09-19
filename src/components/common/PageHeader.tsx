import React from 'react';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  className?: string;
}

const PageHeader = ({ title, subtitle, className = "" }: PageHeaderProps) => {
  return (
    <div className={`mb-8 ${className}`}>
      <h1 className="text-4xl font-playfair font-bold text-luxury-text mb-4">
        {title}
      </h1>
      {subtitle && (
        <p className="text-xl text-luxury-text-muted">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default PageHeader;