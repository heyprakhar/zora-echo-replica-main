import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

interface TOCItem {
  id: string;
  title: string;
  level: number;
}

interface TableOfContentsProps {
  items: TOCItem[];
  className?: string;
}

const TableOfContents: React.FC<TableOfContentsProps> = ({ items, className = '' }) => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <Card className={`mb-8 ${className}`}>
      <CardHeader>
        <CardTitle className="text-luxury-gold flex items-center gap-2">
          📖 Table of Contents
        </CardTitle>
      </CardHeader>
      <CardContent>
        <nav>
          <ol className="space-y-2">
            {items.map((item, index) => (
              <li key={item.id} className={`${item.level > 1 ? 'ml-4' : ''}`}>
                <button
                  onClick={() => scrollToSection(item.id)}
                  className="text-luxury-text hover:text-luxury-gold transition-colors text-left w-full"
                >
                  {index + 1}. {item.title}
                </button>
              </li>
            ))}
          </ol>
        </nav>
      </CardContent>
    </Card>
  );
};

export default TableOfContents;