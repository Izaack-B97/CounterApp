
describe('Pruebas en el archivo demo.test.js', () => {
    
    test('Deben de ser iguales los strings', () => {
        
        // 1. Inicializacion
        const mensaje1 = 'Hola mundo';

        // 2. Estimulo
        const mensaje2 = 'Hola mundo';

        // 3. Onservar el comportamiento
        expect(mensaje1).toBe(mensaje2);

    });
    
});