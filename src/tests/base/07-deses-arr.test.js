import { retornaArreglo } from "../../base/07-deses-arr";

describe('Pruebas en desestructuracion', () => {

    test('debe de retornar un string y un numero ', () => {
        const [ letras, numero ] = retornaArreglo(); // ['ABC', 123]

        console.log(typeof letras);

        expect( letras ).toBe('ABC');
        expect( typeof letras ).toBe('string');

        console.log(typeof letras);

        expect( numero ).toBe(123);
        expect( typeof numero ).toBe('number');
    
    });
    
});