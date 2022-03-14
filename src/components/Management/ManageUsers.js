import React, { useEffect } from 'react'
import { useState } from 'react';
import { FilterUsers } from './FilterUsers';
import { DeleteUsers } from './DeleteUsers';
import { AuthContext } from '../../auth/authContext';
import { useContext } from 'react';
import { useFetch } from '../Hooks/useFetch'

export const ManageUsers = ({ users, setUsers, setfetchDataUsers }) => {

    const context = useContext(AuthContext);

    useEffect(() => {
        setfilteredUsers(users);
    }, [users])

    const [filteredUsers, setfilteredUsers] = useState([]); // usuarios filtrados para componenete FilterUsers.js

    const [modifyDataUser, setModifyDataUser] = useState([]); // datos para el fetch
    const modifyUser = useFetch(modifyDataUser); // hacemos fetch inicial

    // Actualizamos datos en componente principal cuando insertamos
    useEffect(() => {
        if (modifyUser.result === 'ok') {
            setfetchDataUsers({
                endPoint: `user`,
                options: {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": "Bearer " + context.token
                    }
                }
            })
        }
    }, [modifyUser])

    const initialState = {
        id: '',
        userName: '',
        surname: '',
        email: '',
        password: '',
        user_type: 2,
        button: 'Añadir usuario'
    }
    const [form, setForm] = useState(initialState);
    const { id, userName, surname, email, password, user_type, button } = form;

    const handleChange = e => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    }

    const handlesubmit = e => {
        e.preventDefault();
        if (userName.trim().length > 0 && surname.trim().length > 0 && email.trim().length > 0) {
            if (id === '') {
                setModifyDataUser({
                    endPoint: `user`,
                    options: {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                            "Authorization": "Bearer " + context.token
                        },
                        body: JSON.stringify(form)
                    },
                });
            } else {
                setModifyDataUser({
                    endPoint: `user/${form.id}`,
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
            alert('Todos los campos son obligatorios ');
        };
    }

    const handleCancel = e => {
        setForm(initialState);
    }

    return (
        <div className='manageUsers_main'>
            {/* <h1>Nuevo tutor</h1> */}
            <FilterUsers users={users} setfilteredUsers={setfilteredUsers} />
            <DeleteUsers users={users} filteredUsers={filteredUsers} setForm={setForm} setfetchDataUsers={setfetchDataUsers} />
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
                        <span>Email:</span>
                        <input value={email} name='email' type='email' onChange={handleChange} className='' />
                    </label>
                    <label>
                        <span>Password:</span>
                        <input value={password} name='password' type='text' onChange={handleChange} className='' />
                    </label>
                    <label>
                        <span>Nivel de pago:</span>
                        <select name='user_type' value={user_type} onChange={handleChange}>
                            <option name='user_type' value={2}>Normal</option>
                            <option name='user_type' value={3}>Con camaras</option>
                        </select>
                    </label>
                    <input type="submit" className='button' value={button} />
                    <input type="button" className='button' value='Cancelar' onClick={handleCancel} />
                </form>
            </div>
        </div>
    )
}
