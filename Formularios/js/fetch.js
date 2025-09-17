const url_api = "https://pokeapi.co/api/v2/pokemon?limit=20";

/*fetch(url_api).then(respose => respose.json())
.then(datos => {
    console.log(datos);
})
 
fetch(url_api)
    .then(respuesta => {
        if (!respuesta.ok) {
            throw new Error(`Error HTTP: ${respuesta.status}`);
        }
        return respuesta.json();
    })
    .then(datos => {
        console.log("Conexión exitosa!");
        console.log("Nombres de Pokémon:");
        console.log("======================");
       
        // Crear array de promesas para obtener detalles de cada Pokémon
        const pokeArray = datos.results.map(pokemon =>
            fetch(pokemon.url)
                .then(res => res.json())
                .then(detalles => ({
                    name: detalles.name,
                    image: detalles.sprites.front_default
                }))
        );
       
        // Esperar a que todas las promesas se resuelvan
        return Promise.all(pokeArray);
    })
    .then(pokemonesConImagen => {
        // Mostrar solo nombre e imagen de cada Pokémon
        pokemonesConImagen.forEach((pokemon, index) => {
            console.log(`${index + 1}. ${pokemon.name.toUpperCase()}`);
            console.log(` Imagen: ${pokemon.image}`);
            console.log("---");
        });
    })
    .catch(error => {
        console.error("Error:", error.message);
    });

*/

    function peticionAJAX(url){
        let new xhr = new XMLHttpRequest();

        xhr.open('GET', url, true);

        xhr.onload = function(){
            if (xhr.status == 200){
                let dato = JSON.parse(xhr.responseText);
                console.log(datos);
            }
            else{
                console.error("Error en la peticion AJAX: ", xhr.status);
            }
        };
        xhr.send();
    }

    peticionAJAX(url_api);
    


    