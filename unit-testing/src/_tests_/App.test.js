import React from 'react';
import App from '../App';
import { create } from 'react-test-renderer';
import { shallow } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('Add Student', () =>{
    it('should render Practice Component', () => {
        let container = shallow(<App />)
        //    console.log(container);
        expect(container.getElements()).toMatchSnapshot();
    })
})
