const elementos = document.querySelector("#elementos");



function CrearImagen(event) {
/* ESTA ES UNA FORMA DE QUE APAREZCA UNA IMAGEN*/

    /*const imagen = '<img src="/recursos/logo-top-5.png">';
    elementos.innerHTML = imagen;*/

    /* ESTA ES OTRA FORMA DE QUE APAREZCA UNA IMAGEN*/

    /*const imagen = document.createElement("img");
    imagen.src = "../recursos/logo-top-5.png";
    imagen.classList.add("imagen");
    elementos.appendChild(imagen);
    console.log(imagen);*/

/* ESTA ES OTRAAA FORMA DE QUE APAREZCA UNA IMAGEN*/

    console.log(event.target.value);
    elementos.innerHTML = "";

    for (let i = 0; i < event.target.value; i++) {


        const imagen = new Image();
        imagen.src = "../recursos/logo-top-5.png";
        imagen.classList.add("imagen");
        elementos.appendChild(imagen);

    }

}