import React from 'react';

import './Input.scss';

interface InputProps {
  invalid: boolean;
  touched: boolean;
  shouldValidate: boolean;
  elementType: string;
  elementValue: string;
  value: string;
  elementConfig: {
    options: {
      value: string;
      displayValue: string;
    }[];
  };
  changed: (event: MouseEvent) => void;
  label: string;
}
const Input = ({
  invalid,
  touched,
  shouldValidate,
  elementType,
  value,
  elementConfig,
  changed,
  label,
}: InputProps) => {
  let inputElement = null;
  const inputStyles = ['input-element'];

  if (invalid && shouldValidate && touched) {
    inputStyles.push('invalid');
  }

  switch (elementType) {
    case 'input':
      inputElement = (
        <input
          className={inputStyles.join(' ')}
          {...elementConfig}
          value={value}
          onChange={changed}
        />
      );
      break;
    case 'textarea':
      inputElement = (
        <textarea
          className={inputStyles.join(' ')}
          {...elementConfig}
          value={value}
          onChange={changed}
        />
      );
      break;
    case 'select':
      inputElement = (
        <select
          className={inputStyles.join(' ')}
          value={value}
          onChange={changed}
        >
          {elementConfig.options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.displayValue}
            </option>
          ))}
        </select>
      );
      break;
    default:
      inputElement = (
        <input
          className={inputStyles.join(' ')}
          {...elementConfig}
          value={value}
        />
      );
  }

  return (
    <div className="input">
      <label className="label">{label}</label>
      {inputElement}
    </div>
  );
};

export default Input;
