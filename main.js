function saludar () {
    let nombre = prompt ("Ingrese su nombre");
    alert (`Bienvenido ${nombre}`); 
    let direccion = prompt ("Ingrese la direccion de entrega")
}
saludar ();

let catalogo = [
    {id: 1, nombre: "zapatos", precio:15000},
    {id: 2, nombre: "jean", precio:10000},
    {id: 3, nombre: "camisa", precio:12000},
    {id: 4, nombre: "campera", precio:18000},
]

let articulo = prompt ("Ingrese el nombre del producto")
const producto = catalogo.find(item => item.nombre == articulo);

if (producto) {
    let mensaje = `
    Id: ${producto.id}
    Nombre: ${producto.nombre}
    $${producto.precio}
    `;
    alert (mensaje);
}else{
    alert ("El producto no se encuentra disponible")
}

let baratos = catalogo.filter((item) => item.precio < 12000);
console.log (filtro);