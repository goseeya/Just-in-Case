import React from 'react';

import './IphoneCaseControl';

interface IPhoneCaseControlProps {
  selected: () => void;
  checked: boolean;
  label: string;
}

const IPhoneCaseControl = ({
  selected,
  label,
  checked,
}: IPhoneCaseControlProps) => (
  <div className="iphone-case-control">
    <input
      onChange={selected}
      type="radio"
      id={label}
      name={label}
      value={label}
      checked={checked}
    />
    <label htmlFor={label}>{label}</label>
  </div>
);

export default IPhoneCaseControl;
