import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { useFetch } from '../Hooks/useFetch'
import { useContext } from 'react/cjs/react.development'
import { AuthContext } from '../../auth/authContext'
import { URL_CRUD } from '../../settings';
import { StudentsListDetail } from './StudentsListDetail';

export const StudentsList = ({ filterStudents, setfetchData }) => {

    const context = useContext(AuthContext);
    const dateToday = new Date().toLocaleDateString('en-CA', { year: 'numeric', month: '2-digit', day: '2-digit' });

    const [modifyData, setModifyData] = useState([]);
    const modifyDaily = useFetch(modifyData); // hacemos fetch inicial

    // Actualizamos datos en componente principal
    useEffect(() => {
        if (modifyDaily.result === 'ok') {
            setfetchData({
                endPoint: `student/current/${dateToday}`,
                options: {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": "Bearer " + context.token
                    }
                }
            })
        }
    }, [modifyDaily])

    const handleChange = e => {
        if (e.target.id) {
            let nameItem = e.target.name;
            let valueItem = e.target.value;
            let idItem = e.target.id;
            let classItem = e.target.className;

            // si pulsamos en boton activo lo desactivamos
            if (valueItem == classItem) { valueItem = ''; }
            idItem = idItem.slice(2);

            // cambiamos al contrario el valor de falta
            if (nameItem == 'absence') { e.target.value == 'a' ? valueItem = '' : valueItem = 'a'; }

            // Insertamos o modificamos valor
            setModifyData({
                endPoint: `daily/${idItem}`,
                options: {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": "Bearer " + context.token
                    },
                    body: `{"${nameItem}":"${valueItem}"}`
                }
            });
        }
    };

    return (
        <div className='studentList_main'>
            {
                filterStudents.map((values, index) => {
                    return (
                        <StudentsListDetail key={index} handleChange={handleChange} values={values} />
                    )
                })
            }
        </div>
    )
}
