import React from 'react';
import ExpensesList from '../Components/Expenses-list/Expenses-list';
import Enzyme, { shallow } from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });
describe('Expenses list comeponent', () => {
     
    it('should update the state', () => {
        // jest.fn();
        const handleChange = jest.spyOn(React, "useState");
        // console.log(handleChange);
    });

    it('toggle the Add Expense from', () => {
        const component = shallow(<ExpensesList />);
        const instance = component.instance();
        // console.log(instance);
    });

    it('toggle the Edit Expense from', () => {
        const component = shallow(<ExpensesList />);
        const instance = component.instance();
        // console.log(instance);
    });
})