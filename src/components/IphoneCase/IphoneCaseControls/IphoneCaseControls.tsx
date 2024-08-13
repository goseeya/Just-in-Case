import React from 'react';

import './IphoneCaseControls.scss';
import IphoneCaseControl from './IphoneCaseControl/IphoneCaseControl';

const controls = [
  { label: 'iPhone6', type: 'iPhone6' },
  { label: 'iPhone7', type: 'iPhone7' },
  { label: 'iPhone8', type: 'iPhone8' },
  { label: 'iPhone9', type: 'iPhone9' },
];

interface IPhoneCaseControlsProps {
  price: string;
  typeSelected: (type: string) => void;
  checkedType: string;
  purchaseable: boolean;
  isAuth: boolean;
  ordered: () => void;
}

const IPhoneCaseControls = ({
  price,
  typeSelected,
  checkedType,
  purchaseable,
  isAuth,
  ordered,
}: IPhoneCaseControlsProps) => (
  <div className="iphone-case-control">
    <p>Price for the case: {price}</p>
    {controls.map((ctrl) => (
      <IphoneCaseControl
        key={ctrl.label}
        label={ctrl.label}
        selected={() => typeSelected(ctrl.type)}
        checked={checkedType === ctrl.type}
      />
    ))}
    <button className="order-button" disabled={!purchaseable} onClick={ordered}>
      {isAuth ? 'ORDER NOW' : 'SIGN UP TO ORDER'}
    </button>
  </div>
);
export default IPhoneCaseControls;
