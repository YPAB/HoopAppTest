import '@testing-library/jest-dom';
import { HomeScreen } from '../../../component/09-useContext/HomeScreen'
import { mount } from 'enzyme';
import { demoTodos } from '../../fixtures/demoTodos';
import { UserContext } from '../../../component/09-useContext/UserContext';

describe('Pruebas en <HomeScreen/>', ()=> {

    const user = {
        name: 'Pablo',
        email: 'pablo@gmail.com'
    }

    const wrapper = mount(
        <UserContext.Provider value= {{
            user
            
        }}>
            <HomeScreen/> 
        </UserContext.Provider>
        
    );

    test('debe de mostrarse correctamente', ()=> {

        expect( wrapper ).toMatchSnapshot();
    })
})