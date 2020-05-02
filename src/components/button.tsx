import React, { MouseEvent } from 'react';

interface ButtonProps {
  type?: 'success' | 'warning' | 'danger' | 'info';
  size?: 'sm' | 'md' | 'lg';
  onClick: CallableFunction;
  text: string;
}

export default function Button({
  type = 'success',
  size = 'md',
  onClick,
  text,
}: ButtonProps) {
  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    onClick(event);
  };

  let styleMods: string = '';

  const colourMod = (colour: string) =>
    `bg-${colour}-600 hover:bg-${colour}-700 `;
  switch (type) {
    case 'warning':
      styleMods += colourMod('yellow');
      break;
    case 'danger':
      styleMods += colourMod('red');
      break;
    case 'info':
      styleMods += colourMod('blue');
      break;
    case 'success':
    default:
      styleMods += colourMod('green');
  }

  styleMods += ' ';

  switch (size) {
    case 'sm':
      styleMods += 'px-4 py-1 text-xs';
      break;
    case 'lg':
      styleMods += 'px-8 py-3 text-md';
      break;
    case 'md':
    default:
      styleMods += 'px-6 py-2 text-sm';
  }

  return (
    <button
      onClick={handleClick}
      className={`${styleMods} rounded shadow text-white font-semibold inline-block transition duration-200`}
    >
      {text}
    </button>
  );
}
