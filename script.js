let tiempos = [];

function registrarTiempo(){

let nombre = document.getElementById("nombre").value;

let tiempo = prompt("Ingrese el tiempo en segundos");

tiempos.push({
nombre:nombre,
tiempo:parseFloat(tiempo)
});

mostrarResultados();
}

function mostrarResultados(){

let tabla = document.getElementById("tablaResultados");

tabla.innerHTML="";

let primero = Math.min(...tiempos.map(t => t.tiempo));

tiempos.forEach(t =>{

let diferencia = (t.tiempo - primero).toFixed(2);

let fila = `
<tr>
<td>${t.nombre}</td>
<td>${t.tiempo}</td>
<td>${diferencia}</td>
</tr>
`;

tabla.innerHTML += fila;

});

}
