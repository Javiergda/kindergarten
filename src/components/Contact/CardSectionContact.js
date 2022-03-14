import React from 'react'
import { Cards } from '../common/Cards'
import person1 from '../../images/person1.jpg'
import person2 from '../../images/person2.jpg'
import person3 from '../../images/person3.jpg'

const cardValues = [
    {
        img: person1,
        title: 'Carmen Garcia Sanchez',
        description: 'Directora de la escuela',
        info: '600 111 222'
    },
    {
        img: person2,
        title: 'Maria Lopez Fernández',
        description: 'Subdirectora y profesora',
        info: '655 444 333'
    },
    {
        img: person3,
        title: 'Francisco Perez',
        description: 'Cocinero',
        info: '622 333 444'
    }
];

export const CardSectionContact = () => {
    return (
        <div className='cardSectionContact_main'>
            <Cards cardValues={cardValues} />
        </div>
    )
}