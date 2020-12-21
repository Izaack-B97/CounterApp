import { shallow } from "enzyme";
import CounterApp from "../CounterApp";


describe('Pruebas en counter app ', () => {

    test('1. Debe mostrar correctamente <CounterApp /> ', () => {
        const value = 10;

        const wrapper = shallow( <CounterApp value={ value } /> );

        expect( wrapper ).toMatchSnapshot();
    });
    
    test('Debe mostrar el valor por defecto de 100 ', () => {
        
        const value = 100;
        const wrapper = shallow( <CounterApp value={ value } /> );
        
        const valorParrafo = wrapper.find('p').text();

        expect( parseInt( valorParrafo ) ).toBe( value + 1 );
    })
    

});