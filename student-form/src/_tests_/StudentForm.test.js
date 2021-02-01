import React from 'react';
// import {render, cleanup} from '@testing-library/react';
import { create } from 'react-test-renderer';
import axios from 'axios';
import StudentForm from '../components/Add-Student/StudentForm';
import enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
// import axiosPost from '../__mocks__/axiosPost';
enzyme.configure({ adapter: new Adapter() });

jest.mock('axios');
describe('in student form', () => {
    it('student form component', () => {
        let form = create(<StudentForm />);

    })
    it('creating a new student', () => {
        // const getSpy = jest.spyOn(axios, 'post');
        const toDoListInstance = shallow(
            <StudentForm />
          );
        // console.log(getSpy);
        axios.post.mockResolvedValue()({
            data: {}
        });

        expect(axios.post).toHaveBeenCalledTimes(0);
    });
})