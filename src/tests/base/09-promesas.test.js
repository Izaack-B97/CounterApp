import { getHeroeByIdAsync } from "../../base/09-promesas";
import heroes from "../../data/heroes";



describe('Pruebas con promesas ', () => {
    /*  TODO: Las pruebas son sincronas por eso pasa el siguiente ejemplo el test */ 
    // test('getHeroeByIdAsync debe retornar un Heroe async ', () => {
        
    //     const id = 1;

    //     getHeroeByIdAsync( id )
    //         .then(resp => {
    //             expect( true ).toBe( false );
    //         });

    // });


    test('getHeroeByIdAsync debe retornar un Heroe async ', ( done ) => {
        
        const id = 1;

        getHeroeByIdAsync( id )
            .then(heroe => {

                expect( heroe ).toBe( heroes[0] );
                done();
                
            });

    });
    

    test('debe de obtener un error si el heroe por id no existe ', ( done ) => {
        const id = 10;

        getHeroeByIdAsync()
            .catch(err => {
                
                expect( err ).toBe('No se pudo encontrar el héroe');
                done();
            
            });
    })
    
    

});