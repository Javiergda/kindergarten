import React from 'react'
import { useState } from 'react';

export const FilterUsers = ({ users, setfilteredUsers }) => {

    // console.log(students);
    const [search, setSearch] = useState('');

    const handleChange = e => setSearch(e.target.value);

    const handleClick = () => {
        const found = users.filter(element => element.surname == search);
        setfilteredUsers(found); // filtramos los usuarios -> ManageUsers.js
    }

    const handleRefresh = () => {
        setfilteredUsers(users); // Cargamos todos los usuarios sin filtro -> ManageUsers.js
    }

    return (
        <div className='filterStudents_main'>
            <form className='form_filter'>
                <label>
                    Buscar apellidos:
                    <input value={search} name='search' type='text' onChange={handleChange} className='' />
                </label>
                <input type="button" className='button' value="Buscar" onClick={handleClick} />
                <input type="button" className='button' value="Todos" onClick={handleRefresh} />
            </form>
        </div>
    )
}
