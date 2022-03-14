import React from 'react'
import { useContext } from 'react'
import { useState, useEffect } from 'react';
import { FilterStudents } from './FilterStudents';
import { DeleteStudents } from './DeleteStudents';
import { AuthContext } from '../../auth/authContext'
import { URL_CRUD } from '../../settings';
import { useFetch } from '../Hooks/useFetch';

export const ManageStudents = ({ users, students, setStudents, setfetchDataStudents }) => {

    const context = useContext(AuthContext);

    useEffect(() => {
        setfilteredStudents(students);
    }, [students])

    const [filteredStudents, setfilteredStudents] = useState([]); // students filtrados para componenete FilterStudents.js

    const [modifyDataStudent, setModifyDataStudent] = useState([]); // datos para el fetch
    const modifyStudent = useFetch(modifyDataStudent); // hacemos fetch inicial

    // Actualizamos datos en componente principal cuando insertamos
    useEffect(() => {
        if (modifyStudent.result === 'ok') {
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
    }, [modifyStudent])

    const initialState = {
        id: '', // vacio si es insertar - con valor para modificar
        user_id: '', // vacio si es intertar - con valor para modificar
        userName: '',
        surname: '',
        letter: 'A',
        phone1: '',
        phone2: '',
        birth_date: '',
        email_user: '', // para buscarlo si existe en usuarios cuando lo insertemos en bd
        button: 'Añadir estudiante'
    }

    const [form, setForm] = useState(initialState); // cambios en formulario y actualizaciones de FilterStudents
    const { id, userName, surname, letter, phone1, phone2, birth_date, email_user, button } = form;

    const handleChange = e => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    }

    const handlesubmit = e => {
        e.preventDefault();
        if (userName.trim().length > 0 && surname.trim().length > 0 && letter.trim().length > 0 && phone1.trim().length > 0
            && birth_date.trim().length > 0 && email_user.trim().length > 0) {

            // buscamos que el email exista en algun usuario
            const foundUser = users.find(element => element.email == email_user);
            if (foundUser) {
                if (id === '') {
                    // Asignamos id del usuario encontrado a user_id
                    const valuesForm = form;
                    valuesForm.user_id = foundUser.id;

                    setModifyDataStudent({
                        endPoint: `student`,
                        options: {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json",
                                "Authorization": "Bearer " + context.token
                            },
                            body: JSON.stringify(valuesForm)
                        },
                    });
                } else {
                    setModifyDataStudent({
                        endPoint: `student/${form.id}`,
                        options: {
                            method: "PUT",
                            headers: {
                                "Content-Type": "application/json",
                                "Authorization": "Bearer " + context.token
                            },
                            body: JSON.stringify(form)
                        },
                    });
                }
                setForm(initialState);
            } else {
                alert('¡El email debe existir en algun usuario!')
            }
        } else {
            alert('¡Todos los campos son obligatorios!')
        };
    }

    const handleCancel = e => {
        setForm(initialState);
    }

    return (
        <div className='manageStudents_main'>
            {/* <h1>Nuevo alumno</h1> */}
            <FilterStudents students={students} setStudents={setStudents} setfilteredStudents={setfilteredStudents} />
            <DeleteStudents users={users} filteredStudents={filteredStudents} setForm={setForm} setfetchDataStudents={setfetchDataStudents} />
            <div className='wrapper'>
                <form onSubmit={handlesubmit} className='form'>
                    <label>
                        <span>Nombre:</span>
                        <input value={userName} name='userName' type='text' onChange={handleChange} className='' />
                    </label>
                    <label>
                        <span>Apellidos:</span>
                        <input value={surname} name="surname" type='text' onChange={handleChange} className='' />
                    </label>
                    <label>
                        <span>Letra:</span>
                        <select name='letter' value={letter} onChange={handleChange}>
                            <option name='letter' value='A'>A</option>
                            <option name='letter' value='B'>B</option>
                            <option name='letter' value='C'>C</option>
                        </select>
                    </label>
                    <label>
                        <span>Telefono1:</span>
                        <input value={phone1} name='phone1' type='text' onChange={handleChange} className='' />
                    </label>
                    <label>
                        <span>Telefono2:</span>
                        <input value={phone2} name='phone2' type='text' onChange={handleChange} className='' />
                    </label>
                    <label>
                        <span>Nacimiento:</span>
                        <input value={birth_date} name='birth_date' type='date' onChange={handleChange} className='' />
                    </label>
                    <label>
                        <span>Email/Tutor:</span>
                        <input value={email_user} name='email_user' type='email' onChange={handleChange} className='' />
                    </label>
                    <input type="submit" className='button' value={button} />
                    <input type="button" className='button' value='Cancelar' onClick={handleCancel} />
                </form>
            </div>
        </div>
    )
}
