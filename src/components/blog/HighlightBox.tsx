import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface HighlightBoxProps {
  title?: string;
  children: React.ReactNode;
  icon?: string;
  variant?: 'info' | 'success' | 'warning' | 'luxury';
  className?: string;
}

const HighlightBox: React.FC<HighlightBoxProps> = ({
  title,
  children,
  icon,
  variant = 'luxury',
  className = ''
}) => {
  const variantStyles = {
    info: 'bg-blue-50 border-blue-200 text-blue-900',
    success: 'bg-green-50 border-green-200 text-green-900',
    warning: 'bg-yellow-50 border-yellow-200 text-yellow-900',
    luxury: 'bg-luxury-gold/10 border-luxury-gold/30 text-luxury-text'
  };

  return (
    <Card className={`${variantStyles[variant]} my-6 ${className}`}>
      <CardContent className="p-6">
        {(title || icon) && (
          <div className="flex items-center gap-3 mb-4">
            {icon && (
              <span className="text-2xl">{icon}</span>
            )}
            {title && (
              <Badge
                variant="outline"
                className={variant === 'luxury' ? 'border-luxury-gold text-luxury-gold' : ''}
              >
                {title}
              </Badge>
            )}
          </div>
        )}
        <div className="prose prose-sm max-w-none">
          {children}
        </div>
      </CardContent>
    </Card>
  );
};

export default HighlightBox;