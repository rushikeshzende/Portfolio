'use client';

import { MouseEvent } from 'react';

interface ScrollToButtonProps {
  targetId: string;
  children: React.ReactNode;
  className?: string;
}

export default function ScrollToButton({ targetId, children, className = '' }: ScrollToButtonProps) {
  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <a 
      href={`#${targetId}`} 
      onClick={handleClick}
      className={className}
    >
      {children}
    </a>
  );
}
