import React, { ReactNode } from 'react';

import './Button.scss';

interface ButtonProps {
  disabled?: boolean;
  btnType: string;
  children: ReactNode;
  clicked: () => void;
}
const Button = ({ disabled, children, clicked, btnType }: ButtonProps) => (
  <button
    disabled={disabled}
    className={['button', btnType].join(' ')}
    onClick={clicked}
  >
    {children}
  </button>
);

export default Button;
