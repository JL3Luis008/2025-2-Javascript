// 🏠 Práctica para casa:
// Contar cuántos de una lista de edades pueden votar
//
// Instrucciones:
// Crea un arreglo de edades (pedirlo al usuario).
//
// Recorre el arreglo.
//
// Cuenta cuántos tienen 18 años o más.
//
// Muestra el total.

const { ask } = require('../helpers/input');

async function main() {
  let opcion = '';
  let edad = [];

  while (opcion !== '4') {
    opcion = await ask('¿Qué deseas hacer? \n1. Agregar una persona(Edad) \n2. Eliminar una persona(Edad) \n3. lista de personas (Edades)  \n4. Salir\n');
    if (opcion === '1') {
      //Agregar
      let edadDePersona = await ask('¿Qué edad tiene la persona?: ');
      edad.push(edadDePersona);
      console.log(`persona(Edad) agregada: ${edadDePersona}`);
      console.log('persona(Edad) disponibles: ', edad);
      console.log( edadDePersona >= 18 ? `persona que pueden votar: ${edadDePersona}` : `persona que pueden no votar: ${edadDePersona}`);
    
    } else if (opcion === '2') {
      //Eliminar
      if (edad.length === 0) {
        console.log('No hay personas disponibles');
        continue;
      } else {
        let personaEliminar = await ask('¿Qué persona(Edad) deseas eliminar?: ');
        let index = edad.indexOf(personaEliminar);

        if (index !== -1) {
          edad.splice(index, 1);
          console.log(`${personaEliminar} ha sido eliminada `)
        } else {
          console.log('persona(Edad) no encontrada ');
        }
        console.log( edad >= 18 , 'Personas disponibles(Edad): ', edad );
        console.log('persona(Edad) disponibles: ', edad);
      }

    } else if (opcion === '3') {
     console.assert( edad >= 18 , 'Personas disponibles(Edad): ', edad );
        console.log('persona(Edad) disponibles: ', edad);
    }

    else if (opcion === '4') {
      //Salir
      console.log('Gracias por usar el programa');
      console.assert( edad >= 18 , 'Personas disponibles(Edad): ', edad );
      console.log('persona(Edad) que quedaron al final fueron: ', edad);
    } else {
      console.log('Opción no válida');
    }
  }
}

main();