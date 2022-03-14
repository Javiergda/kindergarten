import React from 'react'
import { Cards } from '../common/Cards'
import bambi1 from '../../images/bambi1.jpg'
import bambi2 from '../../images/bambi2.jpg'
import bambi3 from '../../images/bambi3.jpg'
import bambi4 from '../../images/bambi4.jpg'

const cardValues = [
    {
        img: bambi1,
        title: 'Servicios',
        description: 'Atención personalizada',
        info: '+ Info'
    },
    {
        img: bambi2,
        title: 'Horarios',
        description: 'Amplios horarios',
        info: '+ Info'
    },
    {
        img: bambi3,
        title: 'Profesores',
        description: 'profesores con experiencia',
        info: '+ Info'
    },
    {
        img: bambi4,
        title: 'Contacto',
        description: 'Contacta con nosotros',
        info: '+ Info'
    }
];

export const CardSection = () => {
    return (
        <div className='cardSection_main'>
            {/* <h1>Conócenos</h1> */}
            <Cards cardValues={cardValues} />
        </div>
    )
}