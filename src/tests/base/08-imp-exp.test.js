import { getHeroeById, getHeroesByOwner } from "../../base/08-imp-exp";
import heroes from "../../data/heroes";

describe('Pruebas en funciones de heroes ' , () => {
    
    test('Debe de retornar un heroe por id', () => {
        const id = 1;
        const heroe = getHeroeById(id);
        
        const heroeData = heroes.find(hero => hero.id === heroe.id);

        expect(heroe).toEqual(heroeData);
    })
    
    test('Debe de retornar undefined si el heroe no existe', () => {
        const id = 500;
        const heroe = getHeroeById(id);

        expect( heroe ).toBe( undefined );
    })

    test('Debe de retornar un arreglo con heroes de DC ', () => {
        const owner = 'DC';

        const heroesDC = getHeroesByOwner(owner);
        const heroesData = heroes.filter(hero => hero.owner === owner);

        console.log(heroesDC);

        expect(heroesDC).toEqual(heroesData);
        
        // Otra opcion 
        // heroesDC.forEach(hero => {
        //     expect(hero.owner).toBe(owner);
        // });
    })

    test('Debe de retornar un objeto con heroes de Marvel y su longitud sea dos ', () => {
        const owner = 'Marvel';
        const heroesMarvel = getHeroesByOwner( owner );

        console.log( heroesMarvel );

        expect( typeof heroesMarvel ).toBe( 'object' );
        expect( heroesMarvel.length ).toBe( 2 );
    })
    
});