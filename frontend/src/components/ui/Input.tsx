import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export const Input: React.FC<InputProps> = ({
  label,
  error,
  className = '',
  id,
  ...props
}) => {
  return (
    <div className="w-full flex flex-col gap-1.5">
      {label && (
        <label htmlFor={id} className="text-sm font-medium text-slate-700">
          {label}
        </label>
      )}
      <input
        id={id}
        className={`w-full px-4 py-3 rounded-xl border ${
          error ? 'border-accent-red focus:ring-accent-red' : 'border-slate-200 focus:ring-primary'
        } bg-white text-slate-800 placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:border-transparent transition-all duration-200 ${className}`}
        {...props}
      />
      {error && <span className="text-xs text-accent-red font-medium">{error}</span>}
    </div>
  );
};

interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
}

export const TextArea: React.FC<TextAreaProps> = ({
  label,
  error,
  className = '',
  id,
  ...props
}) => {
  return (
    <div className="w-full flex flex-col gap-1.5">
      {label && (
        <label htmlFor={id} className="text-sm font-medium text-slate-700">
          {label}
        </label>
      )}
      <textarea
        id={id}
        rows={4}
        className={`w-full px-4 py-3 rounded-xl border ${
          error ? 'border-accent-red focus:ring-accent-red' : 'border-slate-200 focus:ring-primary'
        } bg-white text-slate-800 placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:border-transparent transition-all duration-200 resize-none ${className}`}
        {...props}
      />
      {error && <span className="text-xs text-accent-red font-medium">{error}</span>}
    </div>
  );
};
