import '@testing-library/jest-dom';
import { getUser, getUsuarioActivo } from '../../base/05-funciones';


describe('Pruebas en 05-funciones', () => {
    
    test('getUser debe retornar un objeto ', () => {
        const userTest = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        };
        const user = getUser();
        // console.log(user);
        expect(user).toEqual(userTest);
    });

    test('getUserActivo debe devolver un objeto ', () => {
        
        const nombre = 'Isaac';

        const objectTest = {
            uid: 'ABC567',
            username: nombre
        };
        
        const object = getUsuarioActivo(nombre);

        expect( object ).toEqual(objectTest);
    })
    
    

});

