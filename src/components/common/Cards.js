import React from 'react'
import { Card } from './Card'

export const Cards = ({ cardValues }) => {
    return (
        <div className='cards_main'>
            {
                cardValues.map((values, index) => {
                    return (
                        <Card key={index} values={values} />
                    )
                })
            }
        </div>
    )
}