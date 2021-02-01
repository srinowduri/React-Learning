import React from 'react';
import App from '../App';
import enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
enzyme.configure({ adapter: new Adapter() });

// import { create } from 'react-test-renderer';
import { render, shallow } from 'enzyme';
describe('App component', () => {
    test('testing app component', () => {
        const container = shallow(<App />);
        expect(container).toMatchSnapshot();
        // console.log(container);
    })
    
})