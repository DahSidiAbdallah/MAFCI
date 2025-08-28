import React from 'react';
import { Building2 } from 'lucide-react';

interface LogoProps {
  variant?: 'default' | 'white';
}

const Logo: React.FC<LogoProps> = ({ variant = 'default' }) => {
  return (
    <div className="flex items-center">
      <Building2 
        className={`${variant === 'white' ? 'text-primary' : 'text-primary'} mr-2`} 
        size={32} 
      />
      <div>
        <span className={`font-bold text-2xl ${variant === 'white' ? 'text-white' : 'text-secondary'}`}>
          MAFCI
        </span>
        <span className={`hidden md:inline-block ml-2 text-sm ${variant === 'white' ? 'text-gray-300' : 'text-gray-600'}`}>
          
        </span>
      </div>
    </div>
  );
};

export default Logo;