let nombreIngresado = prompt ("Ingresar nombre");
let apellidoIngresado = prompt ("Ingresar apellido");
if ((nombreIngresado !="") && (apellidoIngresado !="")) {
    alert ("Nombre: "+nombreIngresado +"\nApellido: "+apellidoIngresado);
}else{
    alert("Error: Ingresar nombre y apellido")
}

for  (let i = 1; i <= 10; i++) {
    let resultado = 1 * i ;
    alert (`${nombreIngresado} ${apellidoIngresado} su turno es ${resultado}`);
}