import React from 'react';
import { render } from '@testing-library/react';
import PrimeraApp from '../PrimeraApp';


describe('Pruebas en <PrimeraApp /> ', () => {

    test('debe de mostrar el mensaje "Hola, soy Isaac"', () => {
        
        const saludo = 'Hola, soy Isaac';

        const wrapper = render( <PrimeraApp saludo={ saludo }/> );
        const { getByText } = wrapper;
    
        expect( getByText(saludo) ).toBeInTheDocument();
    });
    

});