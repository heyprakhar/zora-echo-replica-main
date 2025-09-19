import React from 'react';

interface FeaturesListProps {
  items: string[];
  className?: string;
}

const FeaturesList = ({ items, className = "" }: FeaturesListProps) => {
  return (
    <ul className={`list-disc list-inside space-y-2 ${className}`}>
      {items.map((item, index) => (
        <li key={index} className="text-luxury-text-muted">
          {item}
        </li>
      ))}
    </ul>
  );
};

export default FeaturesList;