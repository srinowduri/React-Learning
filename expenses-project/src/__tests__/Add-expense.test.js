import React from 'react';
import AddExpense from '../Components/Add Expense/Add-expense';
import Enzyme, { shallow } from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('Add expense component.....', () => {
    let wrapper;
  
    beforeEach(() => {
      wrapper = Enzyme.shallow(<AddExpense />);
    });
    
    it('should update the state', () => {
        const handleInputChange = jest.spyOn(React, "useState");
        // console.log(handleInputChange);
    })
})
