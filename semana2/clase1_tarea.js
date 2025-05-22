// Práctica para casa:
// Imprimir números pares del 1 al 100
const { ask } = require('../helpers/input');

async function main() {
    
    for (let i = 1; i <= 10; i++) {
        if (i % 2 === 0) {
           console.log(` el numero ${i} es par`);
        } 
    
    }


    const calificaciones = [60, 54, 70, 95, 98, 75, 85, 68, 90, 60, 88, 79, 100, 50, 93];
    const aprobados = calificaciones.filter(nota => nota >= 70 ).length;
    console.log(`total de alumnos aprobados: ${aprobados} `);


    
}

main();
