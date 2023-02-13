
alert ("BIENVENIDO A DIAGNOVET LABORATORIO VETERINARIO")
//uso de variables
let identificacion = prompt ("INGRESE NOMBRE Y APELLIDO DEL PACIENTE");
if (identificacion == "") {
    alert("Debe ingresar nombre del paciente")
} else {
    alert("Paciente ingresado"+ " "+ identificacion +" ")
}

//uso de funciones
function hemogramaurgente(valorurgencia, valorExtraccion, resultadoUrgente) {
    console.log("El precio del Hemograma Urgente es "+valorurgencia+ " más el valor de la extracción "+ valorExtraccion+" el costo todal del estudio es "+ resultadoUrgente)
    
}
hemogramaurgente("$1000","$300","$1300") //uso de operaciones



function realizarpago() {
    let nombre = prompt("Ingrese su nombre: ")
    let monto = prompt ("Ingrese el monto: ")
    
    //uso de condicionales
    if(monto>=1300){
        alert ("Usted abonó :"+ monto)
    }else {
        do {
           alert ("Lo siento; el monto ingresado no es suficiente ") 
        } while (monto>=1300);
    }
}
realizarpago ()