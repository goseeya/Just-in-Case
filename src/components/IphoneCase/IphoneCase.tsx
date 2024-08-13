import React, {useEffect, useState } from 'react';

import './IphoneCase.scss';
import IphoneType from './IphoneType/IphoneType';
import IphoneBoxOptional from './IphoneBoxOptional/IphoneBoxOptional';
import { useDispatch } from 'react-redux';
import { fetchDevices } from 'actions/devices/devices';

interface IphoneCaseProps {
  type: string;
}
const IphoneCase = ({ type }: IphoneCaseProps) => {
  const [value, setValue] = useState(false);
  const dispatch = useDispatch()<any>;

    useEffect(() => {
        dispatch(fetchDevices());
    })
    
  return (
    <div className="iphone-case">
      <IphoneType type={type} />
      <IphoneBoxOptional onChange={() => setValue(!value)} checked={value} />
    </div>
  );
};

export default IphoneCase;
