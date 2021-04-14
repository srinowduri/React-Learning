import React from 'react';
import {render, cleanup} from '@testing-library/react';
import { create } from 'react-test-renderer';
import axios from 'axios';
import Students from '../components/Students/Students';
import enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
enzyme.configure({ adapter: new Adapter() });

jest.mock('axios');

describe('show and hide student form', () => {
    it('toggle student form', () => {

        let container = create(<Students />);
        let instance = container.getInstance(0);
        expect(instance.state.toggleStudentForm).toBe(false);

        instance.switchStudentForm();
        expect(instance.state.toggleStudentForm).toBe(true);

        expect(container.toJSON()).toMatchSnapshot();
    });

    it('should fetch a list of tasks', () => {
        const getSpy = jest.spyOn(axios, 'get');
        const toDoListInstance = shallow(
          <Students />
        );
        expect(getSpy).toBeCalled();
      });

    it('should fetch list of students', () => {
        let component = create(<Students />);
        let instance = component.getInstance();
        console.log(instance.state.students);
     
        axiosMock.get.mockResolvedValueOnce({
            data: {}
        })
        
        expect(axiosMock.get).toHaveBeenCalledTimes(1);
    })
})