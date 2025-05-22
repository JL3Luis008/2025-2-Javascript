//📘 Tarea: Análisis de calificaciones
//🎯 Objetivo:
//Aplicar funciones, bucles y lógica condicional para procesar un arreglo de números.
//
//📝 Instrucciones:
//Crea una función llamada analizarCalificaciones que reciba un arreglo de números (enteros del 0 al 100) que representan calificaciones de estudiantes. La función debe devolver un objeto con la siguiente información:
//
//Cantidad de aprobados (calificaciones ≥ 70)
//
//Cantidad de reprobados (calificaciones < 70)
//
//Promedio general
//
//La calificación más alta y la más baja

const { ask } = require('../helpers/input');

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
    const calificaciones = [60, 54, 70, 95, 98, 75, 85, 68, 90, 60, 88, 79, 100, 50, 93];
    const estudiantes = [
        { nombre: "Jose", nota: 60 }, { nombre: "Octavio", nota: 75 }, { nombre: "Liliana", nota: 88 },
        { nombre: "Maria", nota: 54 }, { nombre: "Jose Luis", nota: 85 }, { nombre: "Sebastian", nota: 79 },
        { nombre: "Antonio", nota: 70 }, { nombre: "Mario", nota: 68 }, { nombre: "Paulina", nota: 100 },
        { nombre: "Adriana", nota: 95 }, { nombre: "Lorena", nota: 90 }, { nombre: "Daniel", nota: 50 },
        { nombre: "Pedro", nota: 98 }, { nombre: "Ana Lilia", nota: 60 }, { nombre: "Rosario", nota: 93 }
    ];

    let aprobados = 0;
    let reprobados = 0;
    let AlumnosAprobados = 0;
    let AlumnosReprobados = 0;
    let mejorEstudiante = estudiantes[0];
    let peorEstudiante = estudiantes[0];

    for (let i = 0; i < calificaciones.length; i++) {
        if (calificaciones[i] >= 70) {
            aprobados++;
        } else {
            reprobados++;
        }

    }

    console.log("•••••••••Solo por calificaciones  ••••••••••")

    console.log(`Total de estudiantes: ${calificaciones.length}`);

    // otra opcion: const aprobados = calificaciones.filter(nota => nota >= 70 ).length;
    console.log(`total de alumnos aprobados: ${aprobados} `);

    // otra opcion: const reprobados = calificaciones.filter(nota => nota <= 70 ).length;
    console.log(`total de alumnos reprobados: ${reprobados} `);


    // da promedio de directo de la lista de calificaciones
    console.log(`Promedio = ${Math.round(obtenerPromedio(calificaciones))}`);


    const estadistica = resumenEstadistico(calificaciones);
    // menor calificacion
    console.log(`El número menor es: ${estadistica.menor}`);
    // mayor calificacion
    console.log(`El número mayor es: ${estadistica.mayor}`);

    console.log("•••••••••Solo por calificaciones (Otra forma de estadistico)  ••••••••••")
    // da promedio de funcion resumen estadistico
    console.log(`El número mayor de ${calificaciones} = ${obtenerMayor(calificaciones)}`);
    console.log(`El promedio es: ${Math.round(estadistica.promedio)}`);
    
    //por estudiantes
    console.log("•••••••••Por  Estudiantes ••••••••••")

    console.log(`Total de estudiantes: ${estudiantes.length}`);

    /*console.log("total de alumnos aprobados:");
             for (let i = 0; i < estudiantes.length; i++) {
               if(estudiantes[i].nota >= 70){
                   console.log(`• ${estudiantes[i].nombre} con nota de: ${estudiantes[i].nota}`);
                       aprobados++;
               } 
             } */



    console.log("••••••••••••••••Los alumnos aprobados son:");
    for (let i = 0; i < estudiantes.length; i++) {
        let est = estudiantes[i];

        if (est.nota >= 70) {
            console.log(`• ${est.nombre} con nota de: ${est.nota}`);
            AlumnosAprobados++;
        }
        if (est.nota > mejorEstudiante.nota) {
            mejorEstudiante = est;
        }
    }

    console.log(`\nTotal de estudiantes aprobados: ${AlumnosAprobados}`);
    console.log(`El estudiante con la mayor calificacion es: ${mejorEstudiante.nombre}`);
    console.log(`Con nota de: ${mejorEstudiante.nota}`);

    //Reprobados

    console.log("••••••••••••••••Los alumnos reprobados son:");
    for (let i = 0; i < estudiantes.length; i++) {
        let est2 = estudiantes[i];

        if (est2.nota < 70) {
            console.log(`• ${est2.nombre} con nota de: ${est2.nota}`);
            AlumnosReprobados++;
        }
        if (est2.nota < peorEstudiante.nota) {
            peorEstudiante = est2;
        }
    }

    console.log(`\nTotal de estudiantes aprobados: ${AlumnosReprobados}`);
    console.log(`El estudiante con la menor calificacion es: ${peorEstudiante.nombre}`);
    console.log(`Con nota de: ${peorEstudiante.nota}`);

    console.log(`${peorEstudiante.nombre} ponte a estudiar de verdad, lo veo en extraordinarios`);
    console.log(`Felicidades ${mejorEstudiante.nombre} diviertase en sus vacaciones`);

 console.log("••••••••••••••••••••••••••••••••••••••••••••••••••••••••••fin");

    /* console.log("total de alumnos reprobados:");
    for (let i = 0; i < estudiantes.length; i++) {
        if (estudiantes[i].nota < 70) {
            console.log(`• ${estudiantes[i].nombre} con nota de: ${estudiantes[i].nota}`);
            reprobados++;
        }
    } */
}

main();