const formulario_producto_nuevo = document.querySelector("#formulario_producto_nuevo");

let productos = [];//estoy declarando un arreglo vacio

let src_imagen_producto = "../recursos/default-image.jpg";

class Producto {
    constructor(id, imagen, nombre, descripcion, precio){

        this.Imagen = imagen;
        this.Id = id;
        this.Nombre = nombre;
        this.Descripcion = descripcion;
        this.Precio = precio;
    }

    ObtenerDatos(){
        console.log(this.Id);
        console.log(this.Imagen);
        console.log(this.Nombre);
        console.log(this.Descripcion);
        console.log(this.Precio);
    }
}

function AgregarProducto(event){

    let datosFormulario = new FormData(formulario_producto_nuevo);
    const datos = Object.fromEntries(datosFormulario.entries());
    console.log(datos)
    if(datos.Nombre != "" && datos.Descripcion != " " && datos.Precio != null)
    productos.push(new Producto(productos.length+1, datos.Nombre, datos.Descripcion, datos.Precio, datos.Imagen));

    productos.forEach(producto =>{
        producto.ObtenerDatos();
    });

    const json = JSON.stringify(datos);    
    console.log(json);
}

function obtenerImagen(event){
    const file = event.target.files[0];
    if(file.type === "image/jpeg" || file.type === "image/png"){
        console.log (file.name);

        const lector = new FileReader();

        lector.onload = (event) =>{
            src_imagen_producto = event.target.result;
            document.querySelector("#imagen-file").src = src_imagen_producto;
        }
        lector.readAsDataURL(file);
    }
}