import React from 'react';
import { icons } from 'lucide-react';

const Icon = ({ name, className, ...props }) => {
  // Convert kebab-case to PascalCase (e.g. 'layout-dashboard' -> 'LayoutDashboard')
  if (!name) return null;
  const componentName = name.split('-').map(part => part.charAt(0).toUpperCase() + part.slice(1)).join('');
  
  const LucideIcon = icons[componentName];
  
  if (!LucideIcon) {
    console.warn(`Icon ${name} not found in lucide-react`);
    return null;
  }

  return <LucideIcon className={className} {...props} />;
};

export default Icon;
