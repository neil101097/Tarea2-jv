// estas document.queryselector sirven para traer los datos del html
const formulario = document.querySelector("#formulario");
const nombre = document.querySelector("#nombre");
const edad = document.querySelector("#edad");
const resultado = document.querySelector("#resultado");

formulario.addEventListener("submit", verificarEdad);

function verificarEdad(event) {

  
    event.preventDefault();

    const nombreIngresado = nombre.value;
    const edadIngresada = Number(edad.value);
    
    if (edadIngresada >= 18) {        
        resultado.textContent = "✅ Bienvenido " + nombreIngresado + " tienes acceso al evento.";
        resultado.classList.remove("error");
        resultado.classList.add("exito");

    } else {
        resultado.textContent = "❌ Lo sentimos," + nombreIngresado + " debes ser mayor de edad.";
        resultado.classList.remove("exito");
        resultado.classList.add("error");


    }
}