import { shallow } from "enzyme";
import CounterApp from "../CounterApp";


describe('Pruebas en counter app ', () => {

    let wrapper = shallow( <CounterApp value={ 10 } /> ); 

    // Se ejecuta antes de cada prueba
    beforeEach(() => {
        wrapper = shallow( <CounterApp value={ 10 } /> );
    });
    
    test('1. Debe mostrar correctamente <CounterApp /> ', () => {
        expect( wrapper ).toMatchSnapshot();
    });
    
    test('Debe mostrar el valor por defecto de 100 ', () => {
        
        const value = 100;
        const wrapper = shallow( <CounterApp value={ value } /> );
        
        const valorParrafo = wrapper.find('p').text();

        expect( parseInt( valorParrafo ) ).toBe( value );
    });

    test('debe de incrementar con el boton +1 ', () => {
        const button1 = wrapper.find('button').at(0); // Devuelve el primero
        button1.simulate('click'); // Simula el evento
        
        const contentParrafo = wrapper.find('p').text();

        expect( contentParrafo ).toBe('11');
    });

    test('debe de decrementar con el boton -1 ', () => {
        const button2 = wrapper.find('button').at(2);        
        button2.simulate('click');

        const contentParrafo = wrapper.find('p').text();
        
        expect( contentParrafo ).toBe('9');
    });
    
    test('debe de poner el valor por defecto con el btn reset ', () => {
        const value = 106;
        const wrapper = shallow( <CounterApp value={ value } /> );
        const buttonIncrement = wrapper.find('button').at(0);
        const buttonReset = wrapper.find('button').at(1);

        buttonIncrement.simulate('click');
        buttonIncrement.simulate('click');
        buttonReset.simulate('click');

        const valorParrafo = wrapper.find('p').text();

        expect( valorParrafo ).toBe(`${ value }`);
    });
    

});