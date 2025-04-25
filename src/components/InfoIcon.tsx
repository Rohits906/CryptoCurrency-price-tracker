import React from 'react';
import { HelpCircle } from 'lucide-react';

interface InfoIconProps {
  tooltip: string;
}

const InfoIcon: React.FC<InfoIconProps> = ({ tooltip }) => {
  return (
    <span className="inline-block ml-1 relative group">
      <HelpCircle size={14} className="text-gray-400" />
      <div className="absolute z-10 w-48 px-2 py-1 text-xs bg-gray-800 text-white rounded shadow-lg 
                    opacity-0 group-hover:opacity-100 bottom-full left-1/2 transform -translate-x-1/2 mb-1 
                    pointer-events-none transition-opacity duration-200">
        {tooltip}
        <svg className="absolute text-gray-800 h-2 w-full left-0 top-full" x="0px" y="0px" viewBox="0 0 255 255">
          <polygon className="fill-current" points="0,0 127.5,127.5 255,0" />
        </svg>
      </div>
    </span>
  );
};

export default InfoIcon;