import React from 'react';
import { create } from 'react-test-renderer';
import { shallow } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Practice from '../Practice';

Enzyme.configure({ adapter: new Adapter() });

describe('Practice unit testing', () =>{
    it('should render Practice Component', () => {
        let container = shallow(<Practice />)
        //    console.log(container);
        expect(container.getElements()).toMatchSnapshot();
    })
})