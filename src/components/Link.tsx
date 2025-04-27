import React from 'react';

interface LinkProps {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
}

export const Link: React.FC<LinkProps> = ({ href, children, onClick }) => {
  return (
    <a
      href={href}
      onClick={(e) => {
        e.preventDefault();
        const element = document.querySelector(href);
        if (element) {
          window.scrollTo({
            top: element.getBoundingClientRect().top + window.scrollY - 80,
            behavior: 'smooth',
          });
        }
        if (onClick) onClick();
      }}
      className="text-gray-800 hover:text-blue-500 font-medium transition-colors duration-300"
    >
      {children}
    </a>
  );
};