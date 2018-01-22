// Component testing is different from normal testings.
// It requires matching instead of what have been returned.
// A method called "React Shallow Renderer" can be imported and used to do this matching.
// Install enzyme-to-json;
// Add "enzyme-to-json/serializer"
// Remove toJSON command (in import and expect sections);

import React from 'react';
import { shallow } from 'enzyme';
import Header from '../../component/Header';

test('should render Header correctly', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper).toMatchSnapshot();
    // const renderer = new ReactShallowRenderer;
    // renderer.render(<Header />);
    // expect(renderer.getRenderOutput()).toMatchSnapshot();
    // expect(wrapper.find('h1').length).toBe(1); (To check for specific element);
    // expect(wrapper.find('h1').text()).toBe('Expensify'); (To check for specific element);
});