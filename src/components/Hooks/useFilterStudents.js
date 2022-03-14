import React, { useState } from 'react'

export const useFilterStudents = (allStudents, letter, age) => {

    const dataStudentsMaped = allStudents.map((element) => {
        return ({
            name: element.name,
            surname: element.surname,
            id_student: element.id,
            letter: element.letter,
            birth_date: element.birth_date || '',
            breackfast: element.dailies[0]?.breackfast || '',
            lunch1: element.dailies[0]?.lunch1 || '',
            lunch2: element.dailies[0]?.lunch2 || '',
            dessert: element.dailies[0]?.dessert || '',
            snack: element.dailies[0]?.snack || '',
            bottle: element.dailies[0]?.bottle || '',
            diaper: element.dailies[0]?.diaper || '',
            nap: element.dailies[0]?.nap || '',
            message: element.dailies[0]?.message || '',
            date: element.dailies[0]?.date || '',
            absence: element.dailies[0]?.absence || '',
        })
    });

    const dateToday = new Date();

    const ageChild = age.slice(-1);// extrae 1,2,3 de age1 del hook select
    let currentYear = dateToday.getFullYear();

    // de Enero a Septiembre se le quita 1 para que coincida con el curso escolar
    if (dateToday.getMonth() + 1 < 9) {
        currentYear = currentYear - 1;
    }

    // filtra objeto.letra == letra del select  &&  Año actual - año de nacimiento (extrae los 4 primeros xq es el año de date)
    const filterDataStudents = dataStudentsMaped.filter((element) => element.letter == letter
        && (Math.abs(currentYear - Number(element.birth_date.slice(0, 4)))) == ageChild);

    return [dataStudentsMaped, filterDataStudents]; // devolvemos 1. todos los usuarios, 2. usuarios filtrados por letra y edad
}
