import React from 'react'
import phone from '../../icons/phone.png'
import mobile from '../../icons/mobile.png'
import email from '../../icons/email.png'
import gmail from '../../icons/gmail.png'
import facebook from '../../icons/facebook.png'
import tweeter from '../../icons/tweeter.png'

export const Footer = () => {
    return (
        <footer className='footer__main'>
            <div className='wrap'>
                <nav className='footer_menu'>

                    <ul>
                        <li>
                            <h3><span className='title'>Nuestra escuela</span></h3>
                        </li>
                        <li>
                            <span>Inicio</span>
                        </li>
                        <li>
                            <span>Alumno</span>
                        </li>
                        <li>
                            <span>Profesor</span>
                        </li>
                        <li>
                            <span>Contacto</span>
                        </li>
                    </ul>
                </nav>
                <div className='footer_contact'>
                    <ul>
                        <li>
                            <h3><span className='title'>Contacta con nosotros</span></h3>
                        </li>
                        <li>
                            <p>C/ calle nº1 29010 Málaga</p>
                        </li>
                        <li>
                            <img src={phone} height="15px" alt='phone' />
                            <span>952000000</span>
                        </li>
                        <li>
                            <img src={mobile} height="15px" alt='mobile' />
                            <span>660000000</span>
                        </li>
                        <li>
                            <img src={email} height="15px" alt='email' />
                            <span>bambi@ba.com</span>
                        </li>

                    </ul>
                </div>
                <div className='footer_links'>
                    <ul>
                        <li>
                            <h3><span className='title'>Siguenos</span></h3>
                        </li>
                        <li>
                            <img src={gmail} height="15px" alt='adress' />
                            <span>Gmail</span>
                        </li>
                        <li>
                            <img src={facebook} height="15px" alt='facebook' />
                            <span>Facebook</span>
                        </li>
                        <li>
                            <img src={tweeter} height="15px" alt='tweeter' />
                            <span>Tweeter</span>
                        </li>
                    </ul>
                </div>
            </div>
            <div className='rights'>
                <span>&copy; 2022 - All rights reserved</span>
            </div>
        </footer>
    )
}
