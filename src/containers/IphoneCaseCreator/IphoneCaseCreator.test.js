import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { IphoneCaseCreator } from './IphoneCaseCreator';
import IphoneCaseControls from '../../components/IphoneCase/IphoneCaseControls/IphoneCaseControls';

configure({adapter: new Adapter()});

describe('<IphoneCaseCreator />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<IphoneCaseCreator onInitType={() => {}} />)
  });

  it('should render <IphoneCaseControls />', () => {
    // wrapper.setProps({}))
    expect(wrapper.find(IphoneCaseControls)).toHaveLength(1);
  });
});
