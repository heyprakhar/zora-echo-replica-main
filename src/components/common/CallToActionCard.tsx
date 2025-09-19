import React from 'react';

interface CallToActionCardProps {
  title: string;
  description: string;
  contact: {
    phone?: string;
    address?: string;
  };
  className?: string;
}

const CallToActionCard = ({
  title,
  description,
  contact,
  className = ""
}: CallToActionCardProps) => {
  return (
    <div className={`bg-luxury-gold/10 p-6 rounded-lg ${className}`}>
      <h3 className="text-xl font-semibold text-luxury-text mb-3">
        {title}
      </h3>
      <p className="text-luxury-text-muted mb-4">
        {description}
      </p>
      <div className="space-y-1">
        {contact.phone && (
          <p className="font-semibold">
            📞 Call: {contact.phone}
          </p>
        )}
        {contact.address && (
          <p className="font-semibold">
            📍 {contact.address}
          </p>
        )}
      </div>
    </div>
  );
};

export default CallToActionCard;