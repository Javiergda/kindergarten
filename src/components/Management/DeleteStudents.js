import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import { AuthContext } from '../../auth/authContext'
import { useFetch } from '../Hooks/useFetch'

export const DeleteStudents = ({ filteredStudents, setForm, users, setfetchDataStudents }) => {

    const context = useContext(AuthContext);

    const [deleteDataStudent, setDeleteDataStudent] = useState([]); // datos para el fetch
    const deleteStudent = useFetch(deleteDataStudent); // hacemos fetch inicial

    // Actualizamos datos en componente principal cuando borramos
    useEffect(() => {
        if (deleteStudent.result === 'ok') {
            setfetchDataStudents({
                endPoint: `student`,
                options: {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": "Bearer " + context.token
                    }
                }
            })
        }
    }, [deleteStudent])

    const handleUpdate = e => {
        e.preventDefault();

        // selecciona registro estudiante
        const studentFounded = filteredStudents.find(element => element.id == e.target.value);
        if (studentFounded) {

            console.log(users);
            console.log(studentFounded.user_id);
            // selecciona resgistro usuario relacionado con estudiante
            const userFounded = users.find(element => element.id == studentFounded.user_id);
            console.log(userFounded);

            const state = {
                id: studentFounded.id,
                user_id: userFounded.id, // user
                userName: studentFounded.name,
                surname: studentFounded.surname,
                letter: studentFounded.letter,
                phone1: studentFounded.phone1,
                phone2: studentFounded.phone2,
                birth_date: studentFounded.birth_date,
                email_user: userFounded.email, // user
                button: 'Guardar modificacion'
            }
            setForm(state); // Actualiza formulario de ManageStudents con estudiante seleccionado
        }
    }

    const handleDelete = (e) => {
        setDeleteDataStudent({
            endPoint: `student/${e.target.value}`,
            options: {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + context.token
                },
            },
        });
    }

    return (
        <div className='delete_main'>
            <div className='wrapper'>
                <div className='wrapper2 title'>
                    <div className='name'><span >Nombre</span></div>
                    <div className='surname'><span>Apellidos</span></div>
                    <div className='date'><span>Fecha nac.</span></div>
                    <div className='phone'><span>Telefono1</span></div>
                    <div className='phone'><span>Telefono2</span></div>
                </div>
                {
                    filteredStudents.map(({ id, name, surname, birth_date, phone1, phone2 }) => (
                        <div key={id} className='wrapper2'>
                            <div className='name'><span >{name}</span></div>
                            <div className='surname'><span>{surname}</span></div>
                            <div className='date'><span>{birth_date}</span></div>
                            <div className='phone'><span>{phone1}</span></div>
                            <div className='phone'><span>{phone2}</span></div>
                            <div className='button'><button name='button' type='submit' value={id} onClick={handleUpdate}>Modificar</button ></div>
                            <div className='button'><button name='button' type='submit' value={id} onClick={handleDelete}>Borrar</button ></div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}