import React, { MouseEvent } from 'react';

interface ButtonProps {
  type?: 'success' | 'warning' | 'danger' | 'info';
  size?: 'sm' | 'md' | 'lg';
  onClick: CallableFunction;
  text: string;
  extraClasses?: string;
}

export default function Button({
  type = 'success',
  size = 'md',
  onClick,
  text,
  extraClasses = '',
}: ButtonProps) {
  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    onClick(event);
  };

  extraClasses += ' ';

  const colourMod = (colour: string) =>
    `bg-${colour}-700 hover:bg-${colour}-800 `;

  switch (type) {
    case 'warning':
      extraClasses += colourMod('yellow');
      break;
    case 'danger':
      extraClasses += colourMod('red');
      break;
    case 'info':
      extraClasses += colourMod('blue');
      break;
    case 'success':
    default:
      extraClasses += colourMod('green');
  }

  extraClasses += ' ';

  switch (size) {
    case 'sm':
      extraClasses += 'px-4 py-1 text-xs';
      break;
    case 'lg':
      extraClasses += 'px-8 py-3 text-md';
      break;
    case 'md':
    default:
      extraClasses += 'px-6 py-2 text-sm';
  }

  return (
    <button
      onClick={handleClick}
      className={`${extraClasses} focus:button-outline rounded shadow text-white font-semibold inline-block transition duration-200 whitespace-no-wrap focus:outline-none`}
    >
      {text}
    </button>
  );
}
