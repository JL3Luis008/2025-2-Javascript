// 📝 Instrucciones:
// Crea un arreglo llamado alumnos.
//
// Usa un bucle while para permitir al usuario agregar objetos alumno al arreglo.
// Cada alumno debe tener:
//
// nombre
// edad
// calificacion
//
// Pregunta al usuario si desea seguir agregando más alumnos.
// Después de salir del ciclo, muestra:
// Cuántos alumnos tienen calificación aprobatoria (≥ 70).
// Cuántos pueden votar (edad ≥ 18).
// El promedio general de calificaciones.
// La calificación mayor.
// La calificación menor.










const { ask } = require('../helpers/input');

/*function alumnos2(nombre, edad, calificacion) {
  this.alumnosNombre = nombre;
  this.alumnosEdad = edad;
  this.alumnosCalificaciones = calificacion;
  */

function obtenerPromedio(numeros) {
    let total = 0;
    for (let i = 0; i < numeros.length; i++) {
        total = total + numeros[i];
    }
    const promedio = total / numeros.length;

    return promedio;
}

function obtenerMayor(numeros) {
    let mayor = numeros[0];
    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] > mayor) {
            mayor = numeros[i];
        }
    }
    return mayor;
}

function obtenerMenor(numeros) {
    let menor = numeros[0];
    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] < menor) {
            menor = numeros[i];
        }
    }
    return menor;
}

function resumenEstadistico(numeros) {
    const promedio = obtenerPromedio(numeros);
    const mayor = obtenerMayor(numeros);
    const menor = obtenerMenor(numeros);

    return { menor, mayor, promedio }
    return { 'menor': menor, 'mayor': mayor, 'promedio': promedio }
}


async function main() {
    let opcion = 0;
    let alumnos = [];
   

    while (opcion !== '3') {
        opcion = number(await ask('¿Qué deseas hacer? \n1. Agregar un alumno \n2. mostrar resultados  \n3. terminar\n'));
        if (opcion === '1') {
            //Agregar
           const nombre = await ask('ingresa el nombre del alumno: ');
           const edad = number(await ask('ingresa la edad del alumno: '));
           const calificacion = number(await ask('ingresa la calificacion del alumno: '));
      alumnos.push({nombre, edad, calificacion});

        } else if (opcion === '2') {
            const calificaciones = [];

            for(let i =0; i < alumnos.length; i++) {
                calificaciones.push(alumnos[i].calificacion);
            }
            console.log(
                
            )
            
        } else if (opcion === '3') {


    }
}

main();