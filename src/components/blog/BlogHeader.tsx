import React from 'react';
import { Badge } from '@/components/ui/badge';

interface BlogHeaderProps {
  title: string;
  subtitle?: string;
  category?: string;
  readTime?: string;
  publishDate?: string;
}

const BlogHeader: React.FC<BlogHeaderProps> = ({
  title,
  subtitle,
  category = "Luxury Events",
  readTime = "12 min read",
  publishDate = "Updated December 2024"
}) => {
  return (
    <header className="mb-12 text-center">
      <div className="mb-4">
        <Badge variant="outline" className="text-luxury-gold border-luxury-gold">
          {category}
        </Badge>
      </div>

      <h1 className="text-4xl md:text-5xl font-playfair font-bold text-luxury-text mb-6 leading-tight">
        {title}
      </h1>

      {subtitle && (
        <p className="text-xl text-luxury-text-muted mb-6 max-w-3xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}

      <div className="flex justify-center items-center gap-4 text-sm text-luxury-text-muted">
        <span>{readTime}</span>
        <span>•</span>
        <span>{publishDate}</span>
      </div>
    </header>
  );
};

export default BlogHeader;