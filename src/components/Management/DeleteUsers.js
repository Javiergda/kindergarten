import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import { AuthContext } from '../../auth/authContext'
import { useFetch } from '../Hooks/useFetch'

export const DeleteUsers = ({ filteredUsers, setForm, users, setfetchDataUsers }) => {

    const context = useContext(AuthContext);

    const [deleteDataUser, setDeleteDataUser] = useState([]); // datos para el fetch
    const deleteUser = useFetch(deleteDataUser); // hacemos fetch inicial

    // Actualizamos datos en componente principal cuando borramos
    useEffect(() => {
        if (deleteUser.result === 'ok') {
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
    }, [deleteUser])

    const handleUpdate = e => {
        e.preventDefault();
        // selecciona registro usuario
        const userFounded = filteredUsers.find(element => element.id == e.target.value);
        if (userFounded) {
            const state = {
                id: userFounded.id,
                userName: userFounded.name,
                surname: userFounded.surname,
                email: userFounded.email,
                password: userFounded.password,
                user_type: userFounded.user_type,
                button: 'Guardar modificacion'
            }
            setForm(state); // Actualiza formulario de ManageUsers con usuario seleccionado
        }
    }

    const handleDelete = (e) => {
        setDeleteDataUser({
            endPoint: `user/${e.target.value}`,
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
                    <div className='email'><span>Email</span></div>
                    <div className='phone'><span>Tipo usuario</span></div>
                </div>
                {
                    filteredUsers.map(({ id, name, surname, email, user_type }) => (
                        <div key={id} className='wrapper2'>
                            <div className='name'><span >{name}</span></div>
                            <div className='surname'><span>{surname}</span></div>
                            <div className='email'><span>{email}</span></div>
                            <div className='user_type'><span>{user_type}</span></div>
                            <div className='button'><button name='button' type='submit' value={id} onClick={handleUpdate}>Modificar</button ></div>
                            <div className='button'><button name='button' type='submit' value={id} onClick={handleDelete}>Borrar</button ></div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}