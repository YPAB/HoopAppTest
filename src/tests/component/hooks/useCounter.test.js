import '@testing-library/jest-dom'
import {renderHook,act} from '@testing-library/react-hooks'
import { useCounter } from '../../../hooks/useCounter'

describe('Prueba en useCounter',() => {

    test('debe de retornar valores por defecto', () => {

        const { result } = renderHook( () => useCounter() );

        //console.log(result.current);
        const {counter,increment,decrement,reset} = result.current;


        expect(counter).toBe(10);
        expect(typeof increment).toBe('function');
        expect(typeof decrement).toBe('function');
        expect(typeof reset).toBe('function');

    });


    test('debe de retornar valor pasado como parametro counter', () => {

        const value = 100;
        const { result } = renderHook( () => useCounter(value) );

        //console.log(result.current);
        const {counter,increment,decrement,reset} = result.current;


        expect(counter).toBe(value);
      /*   expect(typeof increment).toBe('function');
        expect(typeof decrement).toBe('function');
        expect(typeof reset).toBe('function'); */

    });

    test('debe de retornar un incremento del valor', () => {

        const value = 100;
        const { result } = renderHook( () => useCounter(value) );

        //console.log(result.current);
        const {increment} = result.current;
        const valueIncrement = value +1;

        act( () => {
            increment();
        });

        const {counter} = result.current;

        expect(counter).toBe(valueIncrement);

    });


    test('debe de retornar un decremento del valor', () => {

        const value = 100;
        const { result } = renderHook( () => useCounter(value) );

        const {decrement} = result.current;
        const valueDecrement = value -1;

        act( () => {
            decrement();
        });

        const {counter} = result.current;
        expect(counter).toBe(valueDecrement);

    });

    test('debe de retornar un Reset del valor', () => {

        const value = 100;
        const { result } = renderHook( () => useCounter(value) );
        
        const {reset} = result.current;
    

        act( () => {
            reset();
        });

        const {counter} = result.current;
        expect(counter).toBe(value);

    })


})