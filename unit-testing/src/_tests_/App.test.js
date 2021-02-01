import React from 'react';
import App from '../App';
import { create } from 'react-test-renderer';
import StudentsList from '../components/Students/StudentsList';
import AddStudentForm from '../components/Forms/AddStudentForm';

describe('Snapshot of Student Form', () =>{
    test('testing Register button', () => {
        let tree = create(<App />)
            expect(tree.toJSON()).toMatchSnapshot();
    })
})

describe('switching button name Register and Cancel', () => {
    test('toggle the button', () =>{
        let tree = create(<StudentsList />)
        let instance =  tree.getInstance();
        expect(instance.state.isActive).toBe(false)

        instance.showAndHide();
        expect(instance.state.isActive).toBe(true);

        expect(tree.toJSON()).toMatchSnapshot()
    })
})

describe('show form info', () => {
    test('show text', () => {
        let tree = create(<AddStudentForm />)
        let instance = tree.getInstance();
        // expect(instance);
        // console.log(instance.);
    })
})