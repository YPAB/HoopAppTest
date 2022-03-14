import React from 'react';

import '@testing-library/jest-dom';
import {shallow} from 'enzyme';
import { HookApp } from '../../HookApp';



describe('Test Componente Hook App',() => {

    test('Debe mostrar <HookApp></HookApp> correctamente', () => {

        const wrapper = shallow(<HookApp/>)


        expect(wrapper).toMatchSnapshot();

    });




})