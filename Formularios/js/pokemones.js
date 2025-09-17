const elementos = document.querySelector("#elementos");
const url_api = "https://pokeapi.co/api/v2/pokemon?limit=20";

function crearTarjetaPokemon(pokemon){
    const contenedor = document.createElement("div");
    contenedor.classList.add("contenedor");

    const imagen = new Image();
    imagen.src = pokemon.image;
    imagen.classList.add("imagen-nueva");

    const titulo = document.createElement("h2");
    titulo.textContent = pokemon.name.toUpperCase();

    const texto = document.createElement("p");
    texto.textContent = pokemon.info || "Este Pokémon no tiene descripción adicional.";

    const boton = document.createElement("button");
    boton.textContent = "Más información";

    contenedor.appendChild(imagen);
    contenedor.appendChild(titulo);
    contenedor.appendChild(texto);
    contenedor.appendChild(boton);

    elementos.appendChild(contenedor);
}

function cargarPokemones(){
    elementos.innerHTML = "<p>Cargando...</p>";

    fetch(url_api)
        .then(res => res.json())
        .then(datos => {
            // Array de promesas para obtener detalles de cada Pokémon
            const pokeArray = datos.results.map(pokemon =>
                fetch(pokemon.url)
                    .then(res => res.json())
                    .then(detalles => ({
                        name: detalles.name,
                        image: detalles.sprites.front_default,
                        info: `Altura: ${detalles.height} | Peso: ${detalles.weight}`
                    }))
            );

            return Promise.all(pokeArray);
        })
        .then(listaPokemones => {
            elementos.innerHTML = ""; // limpiar el "Cargando..."
            listaPokemones.forEach(p => crearTarjetaPokemon(p));
        })
        .catch(error => {
            console.error("Error:", error);
            elementos.innerHTML = "<p>Error al cargar los Pokémon.</p>";
        });
}
