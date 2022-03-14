import React from 'react'

export const Card = ({ values }) => {

    const { img, title, description, info } = values;
    return (
        <div className='card'>
            <img src={img} alt='img' />
            <div>
                <h5>{title}</h5>
            </div>
            <p>
                {description}
            </p>
            <span>{info}</span>
        </div>
    )
}
