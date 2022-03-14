import React from "react";
import '@testing-library/jest-dom'
import {shallow} from 'enzyme';
import {MultipleCustomHooks} from '../../../component/examples-03/MultipleCustomHooks'
import {useFetch} from '../../../hooks/useFetch'
import {useCounter} from '../../../hooks/useCounter'

jest.mock('../../../hooks/useCounter');
jest.mock('../../../hooks/useFetch');


describe('Pruebas en <MultipleCustomHook>', () => {

    beforeEach (() => {
        useCounter.mockReturnValue({
            counter:10,
            increment: () => {}
    
        })
    });

    
    test('Debe de mostrarse correctamente',() => {

        useFetch.mockReturnValue({
            data:null,
            loading:true,
            error:null

        });
        const wrapper = shallow(<MultipleCustomHooks/>);

        expect(wrapper).toMatchSnapshot();

    });

    test('should debe de mostrar la informacion', () => {

        useFetch.mockReturnValue({
            data: [{
                author: 'Yonatan Pablo',
                quote: 'Desarrollo Web'
            }],
            loading:false,
            error:null
        });

        const wrapper = shallow(<MultipleCustomHooks/>);
        expect(wrapper.find('.alert').exists()).toBe( false );
        expect(wrapper.find('.mb-0').text().trim()).toBe( 'Desarrollo Web' ); 
        expect(wrapper.find('footer').text().trim()).toBe( 'Yonatan Pablo' );        
        console.log(wrapper.html());


    })
})