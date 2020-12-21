import React from 'react';
// import { render } from '@testing-library/react';
import { shallow } from 'enzyme';

import PrimeraApp from '../PrimeraApp';

describe('Pruebas en <PrimeraApp /> ', () => {

    // test('debe de mostrar el mensaje "Hola, soy Isaac"', () => {
    //     const saludo = 'Hola, soy Isaac';
    //     const wrapper = render( <PrimeraApp saludo={ saludo }/> );
    //     const { getByText } = wrapper;
    //     expect( getByText(saludo) ).toBeInTheDocument();
    // });
    

    test('Debe mostrar reenderizar <PrimeraApp /> ', () => {
        const saludo = 'Hola, soy Isaac';
        const wrapper = shallow( <PrimeraApp saludo={ saludo }/> );

        expect( wrapper ).toMatchSnapshot();        

    });

    test('debe mostrar el subtitulo enviado por props ', () => {
        
        const saludo = 'Hola, soy Isaac';
        const subTitle = 'Soy un subtitulo';

        const wrapper = shallow(<PrimeraApp saludo={ saludo } subtitulo={ subTitle } />);

        const textoParrafo = wrapper.find('p').text();

        expect( textoParrafo ).toBe( subTitle );
    });
    
    

});