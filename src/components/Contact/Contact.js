import React from 'react'
import { CardSectionContact } from './CardSectionContact'
import house from '../../icons/house.png'
import phone from '../../icons/phone.png'
import email from '../../icons/email.png'
import gmail from '../../icons/gmail.png'
import facebook from '../../icons/facebook.png'
import tweeter from '../../icons/tweeter.png'

export const Contact = () => {
    return (
        <div className='contact_main'>
            <div className='wrap1'>
                <h1>Contacta con nosotros</h1>
                <p>
                    When an unknown printer took a galley of type and
                    scrambled it to make a type specimen book. It has
                    survived not only five centuries, but also the leap
                    into electronic typesetting, remaining essentially
                    unchanged. It was popularised in the 1960s with the
                    release of Letraset sheets containing Lorem Ipsum
                    passages, and more recently with desktop publishing
                    software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
                <p>
                    It was popularised in the 1960s with the
                    release of Letraset sheets containing Lorem Ipsum
                    passages, and more recently with desktop publishing
                    software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
            </div>

            <div className='wrap2'>
                <ul>
                    <li>
                        <img src={house} alt='adress' />
                        <span> C/ calle nº1 29010 Málaga</span>
                    </li>
                    <li>
                        <img src={phone} alt='phome' />
                        <span> 952 111 222 / 600 555 444</span>
                    </li>
                    <li>
                        <img src={email} alt='email' />
                        <span> bambi@ba.com</span>
                    </li>
                </ul>
            </div>

            <div className='wrap3'>
                <h2>Nuestro profesores</h2>
                <CardSectionContact />
            </div>

            <div className='wrap4'>
                <h2>Siguenos</h2>
                <div className='box1'>
                    <img src={gmail} alt='email' />
                    <img src={facebook} alt='email' />
                    <img src={tweeter} alt='email' />
                </div>
            </div>

            <div className='references'>
                <span >Iconos <a href='https://iconos8.es'>iconos8.es</a></span>
                <span > Imagenes <a href='https://www.pexels.com'>pexels.com</a></span>
            </div>
        </div >
    )
}
