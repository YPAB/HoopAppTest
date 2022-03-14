import '@testing-library/react-hooks'
import {renderHook,act} from '@testing-library/react-hooks'

import { useForm } from '../../../hooks/useForm'

describe('pruebas en useForm', () => {
    const initialForm = {
        name:'Pablo',
        email:'pablo@gmail.com'
    };
    

    test('debe de regresar un formulario por defecto', ()=> {

        const {result} = renderHook( () => useForm(initialForm));

        //Desestructurcion de arrays
        const [formValues,handleInputChange, reset] = result.current
        //console.log(result.current);
        //console.log(typeof result.current[0]);

        expect(formValues).toEqual(initialForm)
        expect(typeof handleInputChange).toBe('function')
        expect(typeof reset).toBe('function')

    });

    test('debe de cambiar el valor del formulario', ()=> {

        const {result} = renderHook( () => useForm(initialForm));
        const [, handleInputChange] = result.current

        act ( () => {
            handleInputChange({
                target: {
                    name:'name',
                    value:'Yonatan'
                }
            });
        });

        const [formValues] = result.current
        expect(formValues).toEqual({ ...initialForm,name:'Yonatan'})
        


    });


    test('debe de re-establecer el formulario con RESET', ()=> {

        const {result} = renderHook( () => useForm(initialForm));
        const [, handleInputChange,reset] = result.current

        act ( () => {
            handleInputChange({
                target: {
                    name:'name',
                    value:'Yonatan'
                }
            });

            reset();
        });

        const [formValues] = result.current
        expect(formValues).toEqual(initialForm)

    });


})