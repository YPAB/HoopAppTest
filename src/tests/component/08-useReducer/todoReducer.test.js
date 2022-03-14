import '@testing-library/jest-dom';
import { todoReducer } from '../../../component/08-useReducer/todoReducer'
import { shallow } from 'enzyme';
import { demoTodos } from '../../fixtures/demoTodos';



describe('Pruebas en mi todoReducer', () => {

    test('debe de retornar el primer estado por defecto', () => {

        const state = todoReducer(demoTodos, {});

        expect( state ).toEqual( demoTodos );

    });

    test('debe de agregar un TODO', () => {

        const newTodo = {
            id: 3,
            desc: 'Aprender Mongo',
            done: false
        };

        const action = {
            type:'create',
            payload: newTodo
        }

        
        const state = todoReducer(demoTodos, action);

        expect( state.length ).toBe( 3 );
        expect( state ).toEqual( [ ...demoTodos, newTodo ] );

    });

    test('debe de BORRAR un TODO', () => {


        const action = {
            type:'delete',
            payload: 1
        }

        
        const state = todoReducer(demoTodos, action);

        expect( state.length ).toBe( 1 );
        expect( state ).toEqual( [ demoTodos[1] ] );

    });


    test('debe de cambiar el valor de un TODO', () => {

        

        const action = {
            type:'toggle',
            payload: 1
        }

        
        const state = todoReducer(demoTodos, action);

        expect( state[0].done ).toBe( true );
        expect( state[1] ).toEqual( demoTodos[1] );

    });
})