import React, { useContext } from 'react'
import { Daily } from './Daily'
import { Student } from './Student'
import { useEffect } from 'react'
import { useState } from 'react'
import { AuthContext } from '../../auth/authContext'
import { useFetch } from '../Hooks/useFetch'

export const Students = () => {

    const context = useContext(AuthContext);

    const initalStateFetchData = {
        endPoint: `student/${context.id}`,
        options: {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + context.token
            }
        }
    }
    const [fetchData, setfetchData] = useState(initalStateFetchData);

    // 1. obtenemos datos estudiantes del tutor
    const tutorStudents = useFetch(fetchData);

    // 2. cargamos estudiantes en hooks
    useEffect(() => {
        if (tutorStudents.length > 0) {
            setStudents(tutorStudents);
            setStudent(tutorStudents[0]);
        }
    }, [tutorStudents])

    // Student
    const [students, setStudents] = useState([]); // Todos los estudiantes para opciones del select
    const [student, setStudent] = useState({}); // Dias de un estudiante para opciones del select

    // Daily
    const [dailyStudent, setDailyStudent] = useState({}); // Daily de studiante seleccionado

    return (
        <div className='students_main'>
            <Student students={students} student={student} setStudent={setStudent} setDailyStudent={setDailyStudent} />
            <Daily dailyStudent={dailyStudent} student={student} />
        </div>
    )
}