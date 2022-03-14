import '@testing-library/jest-dom';
import { TodoAdd } from '../../../component/08-useReducer/TodoAdd'
import { shallow } from 'enzyme';
import { demoTodos } from '../../fixtures/demoTodos';

describe('Pruebas en <TodoAdd></TodoAdd>', () => {

    const handleAddTask = jest.fn();

    const wrapper = shallow(<TodoAdd
        handleAddTask= { handleAddTask }
    />)

    test('debe de mostrarse correctamente', () => {

        expect( wrapper ).toMatchSnapshot();
    });

    test('NO debe de llamar a handleAddTodo', () => {

        const formSubmit = wrapper.find('form').prop('onSubmit');

        formSubmit({preventDefault() {} });

        expect( handleAddTask ).toHaveBeenCalledTimes(0);
        

    });


    test('Debe de llamar la funcion handleAddTodo', () => {

        const value = 'Aprender React';

        wrapper.find('input').simulate('change', {
            target: {
                value,
                name: 'description'
            }
        });

        const formSubmit = wrapper.find('form').prop('onSubmit');

        formSubmit({preventDefault() {} });

        expect( handleAddTask ).toHaveBeenCalledTimes(1);
        expect( handleAddTask ).toHaveBeenCalledWith( {
            id: expect.any(Number),
            desc: value,
            done: false
        });

        expect( wrapper.find('input').prop('value') ).toBe('');

        

    });





})