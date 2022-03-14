import React from 'react'
import { useEffect, useState } from 'react'
import { useContext } from 'react/cjs/react.development'
import { AuthContext } from '../../auth/authContext'
import { Course } from './Course'
import { StudentsList } from './StudentsList'
import { useFilterStudents } from '../Hooks/useFilterStudents'
import { useFetch } from '../Hooks/useFetch'

export const Teachers = () => {

    const context = useContext(AuthContext);

    const dateToday = new Date().toLocaleDateString('en-CA', { year: 'numeric', month: '2-digit', day: '2-digit' });

    const initalStateFetchData = {
        endPoint: `student/current/${dateToday}`,
        options: {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + context.token
            }
        }
    }
    const [fetchData, setfetchData] = useState(initalStateFetchData);

    const initialState = {
        age: 'age0',
        letter: 'A'
    }
    const [select, setSelect] = useState(initialState); // opciones del select edad y letra
    const { age, letter } = select;

    const [students, setStudents] = useState([]); //todos los estudiantes para filtrar en las opciones de Course
    const [filterStudents, setFilterStudents] = useState([]); // estudiantes filtrados que vienen de Course

    // 1. obtenemos datos estudiantes
    const allStudents = useFetch(fetchData); // hacemos fetch inicial

    // 2. mapeamos y filtramos estudiantes
    const [allStudentsMaped, allStudentsFiltered] = useFilterStudents(allStudents, letter, age);

    useEffect(() => {
        if (allStudents.length > 0) {
            setStudents(allStudentsMaped);
            setFilterStudents(allStudentsFiltered);
        }
    }, [allStudents])

    return (
        <div>
            <Course select={select} setSelect={setSelect} students={students} setFilterStudents={setFilterStudents} />
            <StudentsList filterStudents={filterStudents} setfetchData={setfetchData} />
        </div>
    )
}