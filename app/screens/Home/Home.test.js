
import React from 'react';

import { shallow } from 'enzyme';

import Home from './index';

describe('Card component', () => {
  it('should render correctly', () => {
    const props = {
      style: {
        height: '10px',
        width: '120px',
      },
      children: '<div>code block</div>',
    };
    const wrapper = shallow(<Home />);

    expect(wrapper).toMatchSnapshot();
  });
});
