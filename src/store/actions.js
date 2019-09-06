export const CHANGE_TYPE = 'CHANGE_TYPE';

export const changeType = (iType) => {
  return {
    type: 'CHANGE_TYPE',
    iPhoneType: iType
  }
};
