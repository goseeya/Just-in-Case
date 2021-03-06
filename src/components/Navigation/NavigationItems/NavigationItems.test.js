import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import NavigationItems from './NavigationItems';
import NavigationItem from './NavigationItem/NavigationItem';
import Auth from '../../../containers/Auth/Auth';

configure({adapter: new Adapter()});

describe('<NavigationItems />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<NavigationItems />);
  });

  it('should render two <NavigtionItem /> elements if not authenticated', () => {
    //find is enzyme utility function
    expect(wrapper.find(NavigationItem)).toHaveLength(2);
  });

  it('should render three <NavigtionItem /> elements if authenticated', () => {
    // wrapper = shallow(<NavigationItems isAuthenticated />);
    wrapper.setProps({isAuthenticated: true});
    expect(wrapper.find(NavigationItem)).toHaveLength(3);
  });

  it('should render an exact logout button', () => {
    wrapper.setProps({isAuthenticated: true});
    expect(wrapper.contains(<NavigationItem link="/logout">Logout</NavigationItem>)).toEqual(true);
  });

  it('should go to auth when clicking shopping auth button', () => {
    wrapper.find(NavigationItem).at(1).simulate('click');
    // TODO finish test
    // const auth = shallow(<Auth />);
    // expect(auth).toHaveLength(1);
  });
});
