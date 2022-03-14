import React from 'react'
import { useState } from 'react';

export const FilterStudents = ({ students, setfilteredStudents }) => {

    // console.log(students);
    const [search, setSearch] = useState('');

    const handleChange = e => setSearch(e.target.value);

    const handleClick = () => {
        console.log(students);

        const found = students.filter(element => element.surname == search);

        console.log(found);
        setfilteredStudents(found); // filtramos los alumnos -> ManageStudents.js
    }

    const handleRefresh = () => {
        setfilteredStudents(students); // Cargamos todos los alumnos sin filtro -> ManageStudents.js
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
