import React from 'react';

import './Backdrop.scss';

interface BackdropProps {
  clicked: () => void;
  show: boolean;
}
const Backdrop = ({ clicked, show }: BackdropProps) =>
  show ? <div className="backdrop" onClick={clicked}></div> : null;

export default Backdrop;
