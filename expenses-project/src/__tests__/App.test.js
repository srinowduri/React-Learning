import React from 'react';
import App from '../App';
import Enzyme, { shallow } from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('App Component', () => {
    it('should render correctly app component', () => {
        const compoent = shallow(<App />);
        expect(compoent).toMatchSnapshot();
    })
})