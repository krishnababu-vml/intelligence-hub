import React from 'react';

export default function InputField({
  label,
  value,
  onChange,
  type = 'number',
  min = '0',
  step,
  suffix,
  helperText,
  className = ''
}) {
  return (
    <div className={className}>
      <label className="block text-sm text-gray-600 mb-2">{label}</label>
      <div className="relative">
        <input
          type={type}
          min={min}
          step={step}
          value={value}
          onChange={(e) => onChange( type === 'number' ? Number(e.target.value) : e.target.value)}
          className={`w-full rounded-md border border-gray-200 bg-white px-4 py-3 text-gray-800 outline-none focus:ring-2 focus:ring-indigo-300 ${
            suffix ? 'pr-14' : ''
          }`}
        />
        {suffix && (
          <span className="absolute right-3 top-3 text-gray-500">{suffix}</span>
        )}
      </div>
      {helperText && (
        <p className="text-xs text-gray-500 mt-2 suffix">{helperText}</p>
      )}
    </div>
  );
}
