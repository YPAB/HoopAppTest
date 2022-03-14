import '@testing-library/jest-dom';
import {RealExampleRef} from '../../../component/useRef-04/RealExampleRef'
import {shallow} from 'enzyme';

describe('Pruebas en <RealExampleRef/>', () => {

    const wrapper = shallow(<RealExampleRef/>)

    test('debe mostrarse correctamente', () => {
        

        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find('MultipleCustomHooks').exists() ).toBe(false);

    });

    test('debe de mostrar el componente <MultipleCustomHooks/>', () => {

        wrapper.find('button').simulate('click');

        expect( wrapper.find('MultipleCustomHooks').exists() ).toBe(true);

    })


})