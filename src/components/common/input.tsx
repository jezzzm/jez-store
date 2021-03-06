import React, { ChangeEvent } from 'react';

type InputProps = {
  onInputChange: CallableFunction;
  label: string;
  placeholder: string;
  value: string;
  type?: string;
  size?: 'sm' | 'md' | 'lg';
  extraClasses?: string;
  name?: string;
  ariaRole?: string;
  ariaLabel?: string;
  hasError?: boolean;
};

export default function Input({
  onInputChange,
  label,
  placeholder,
  value,
  type = 'text',
  size = 'md',
  extraClasses = '',
  name = label,
  ariaRole = 'search',
  ariaLabel = label,
  hasError = false,
}: InputProps) {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    onInputChange(event);
  };

  extraClasses += ' ';

  switch (size) {
    case 'sm':
      extraClasses += 'px-3 py-1 text-xs';
      break;
    case 'lg':
      extraClasses += 'px-6 py-3 text-md';
      break;
    case 'md':
    default:
      extraClasses += 'px-4 py-2 text-sm';
  }

  if (hasError) {
    extraClasses += ' input-error focus:input-error';
  }

  return (
    <label
      role={ariaRole.toLowerCase()}
      aria-label={ariaLabel}
      className=" mb-4"
    >
      <span className="text-xs text-gray-700 font-light">
        {label.toUpperCase()}
      </span>
      <input
        type={type}
        name={name}
        className={`${extraClasses} bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-sm block appearance-none leading-normal transition duration-200`}
        placeholder={placeholder}
        defaultValue={value}
        onChange={handleChange}
      />
    </label>
  );
}
