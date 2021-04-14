import * as axios from 'axios';
import { getExpenses, addNewExpense, getExpenseById, 
            editExpense, deleteExpense } from '../Service/Expense-Service';
import enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
enzyme.configure({ adapter: new Adapter() });

jest.mock('axios');

describe('when the page loads', () => {
    it('make the GET request API call', async () => {

        const expectedResult = [
            { date: '1', store: 'A', price: 11, comments: 'll'},
            { date: '2', store: 'B', price: 22, comments: 'kk'},
            { date: '3', store: 'C', price: 33, comments: 'mm'}
        ];

        const actual = await getExpenses();
        expect(actual).toEqual(expectedResult);
    });
    
    it('make a GET request API call with ID', async () => {
         const expectedResult = { date: '1', store: 'A', price: 11, comments: 'll'};
         const actual = await getExpenseById(1);
         expect(actual).toEqual(expectedResult);
    });

    it('make a POST request API call', async () => {
         const expectedResult = {
            text: "Successfully Added"
        };
        const actual = await addNewExpense();
        expect(actual).toEqual(expectedResult);
    });

    it('make a PUT request API call', async () => {
        const expectedResult = {
            text: "Successfully Updated"
        };
        const actual = await editExpense();
        expect(actual).toEqual(expectedResult);
    });


    it("Make a DELETE request API call", async () => {
        const expectedResult = {
            text: "Successfully Deleted"
        };
        const actual = await deleteExpense();
        expect(actual).toEqual(expectedResult);
    });
})