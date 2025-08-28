import React from 'react';
import MafciActualLogo from '../assets/MAFCI.png'; // Adjusted to your image name and path

interface LogoProps {
  className?: string; 
  height?: string | number;
  width?: string | number; // Added width prop for more control
}

const Logo: React.FC<LogoProps> = ({ 
  className = '', 
  height = 50, // Default height 40px
  width = 'auto' // Default width will be auto to maintain aspect ratio
}) => {
  return (
    <img 
      src={MafciActualLogo} 
      alt="MAFCI Logo" 
      className={className} 
      style={{ height: height, width: width }}
    />
  );
};

export default Logo;