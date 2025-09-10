const elementos = document.querySelector("#elementos");
const tarj = document.querySelectorAll(".tarj");


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

        const tarj = document.createElement("div");
        const imagen = new Image();
        const titulo = document.createElement("h2");
        const text = document.createElement("p");
        const boton = document.createElement("button");


        tarj.classList.add("tar");

        imagen.src = "recursos/logo-top-5.png";
        imagen.classList.add("elementoImagen");

        titulo.classList.add("tarTit");
        titulo.textContent = "TOP";
        text.classList.add("tarTex");
        text.textContent = "Twenty One Pilots";
        boton.classList.add("tarBot");
        boton.textContent = "Más";

        elementos.appendChild(tarj);
        tarj.appendChild(imagen);
        tarj.appendChild(titulo);
        tarj.appendChild(text);
        tarj.appendChild(boton);



    }

}