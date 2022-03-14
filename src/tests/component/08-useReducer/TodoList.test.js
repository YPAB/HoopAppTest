import '@testing-library/jest-dom';
import { TodoList } from '../../../component/08-useReducer/TodoList'
import { shallow } from 'enzyme';
import { demoTodos } from '../../fixtures/demoTodos';

describe('Pruebas en <TodoList></TodoList>', () => {

    const handleDelete = jest.fn();
    const handleToggle = jest.fn();

    const wrapper = shallow(<TodoList 
        todos = {demoTodos}
        handleDelete = { handleDelete }
        handleToggle = { handleToggle }
    />)

    test('debe de mostrarse correctanmente', () => {

        expect( wrapper ).toMatchSnapshot();
    });

    test('debe de tener dos elementos', () => {

        expect( wrapper.find('TodoListItem').length ).toEqual(demoTodos.length);

        //Verificar que tengas sus props
        expect( wrapper.find('TodoListItem').at(0).prop('handleDelete') ).toEqual(expect.any(Function));


    })


})