import React from 'react';
import './IphoneBoxOptional.scss';

interface IphoneBoxOptionalProps {
  onChange: () => void;
  checked: boolean;
}
const IphoneBoxOptional = ({ onChange, checked }: IphoneBoxOptionalProps) => (
  <div className="iphone-box-optional">
    <input type="checkbox" name="check" onChange={onChange} checked={checked} />
    Put into our gift box
  </div>
);

export default IphoneBoxOptional;
