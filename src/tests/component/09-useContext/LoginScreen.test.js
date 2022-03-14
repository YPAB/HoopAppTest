import '@testing-library/jest-dom';
import { LoginScreen } from '../../../component/09-useContext/LoginScreen'
import { mount } from 'enzyme';
import { demoTodos } from '../../fixtures/demoTodos';
import { UserContext } from '../../../component/09-useContext/UserContext';

describe('Pruebas en <LoginScreen/>', ()=> {

    const setUser = jest.fn();

    const wrapper = mount(
        <UserContext.Provider value= {{
            setUser
            
        }}>
            <LoginScreen/> 
        </UserContext.Provider>
        
    );

    test('debe de mostrarse correctamente', ()=> {

        expect( wrapper ).toMatchSnapshot();
    });

    test('debe de mostrarse el setUser con el argumento esperado', ()=> {

        wrapper.find('button').prop('onClick')();

        expect( setUser ).toHaveBeenCalledWith( {
            id:12345,
            name:'Pablo'
        });
    });

})