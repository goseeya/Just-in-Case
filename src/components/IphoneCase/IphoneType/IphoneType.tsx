import React, { ReactElement } from 'react';

import './IphoneType.scss';

interface IPhoneTypeProps {
  type: string | null | ReactElement;
}

const IphoneType = ({ type = null }: IPhoneTypeProps) => {
  switch (type) {
    case 'iPhone6':
      type = (
        <div className="iphone-6">
          <div className="iphone-camera-hole"></div>
        </div>
      );
      break;
    case 'iPhone7':
      type = (
        <div className="iphone-7">
          <div className="iphone-camera-hole"></div>
        </div>
      );
      break;
    case 'iPhone8':
      type = (
        <div className="iphone-8">
          <div className="iphone-camera-hole"></div>
        </div>
      );
      break;
    case 'iPhone9':
      type = (
        <div className="iphone-9">
          <div className="iphone-camera-hole"></div>
        </div>
      );
      break;
    default:
      type = null;
  }
  return type;
};

export default IphoneType;
