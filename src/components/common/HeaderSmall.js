import React from 'react'
import { NavLink } from 'react-router-dom'
import bird from '../../icons/bird.png'
import butterfly from '../../icons/butterfly.png'
import deer from '../../icons/deer.png'
import rabbit from '../../icons/rabbit.png'
import menu from '../../icons/menu.png'
import logo from '../../images/logo.jpg'
import { useState } from 'react'

export const HeaderSmall = ({ context, hover, setHover }) => {

    const { email, user_type, logged } = context;

    const [menuNav, setMenuNav] = useState('hide'); // muestra/oculta el menu small
    const handleClick = () => {
        menuNav == 'hide' ? setMenuNav('show') : setMenuNav('hide');
    }

    return (
        <nav className="nav_small">
            <div className='header_menu'>
                <img src={logo} height="30px" alt='logo' />
                <h3><span>Escuela infantil</span></h3>
                <img src={menu} height="20px" alt='menu' onClick={handleClick} />
            </div>
            <ul name='menuNav' className={menuNav} onClick={handleClick}>
                <NavLink className='nav-link' to="homepage" >
                    <li>
                        <img src={bird} height="20px" alt='bird' />
                        <span>Inicio</span>
                    </li>
                </NavLink>
                <NavLink className={logged ? 'nav-link' + ' authorized' : 'nav-link' + ' notauthorized'} to="alumno">
                    <li>
                        <img src={butterfly} height="20px" alt='butterfly' />
                        <span>Alumno</span>
                    </li>
                </NavLink>
                <NavLink className={logged && user_type == 1 ? 'nav-link' + ' authorized' : 'nav-link' + ' notauthorized'} to="profesor">
                    <li>
                        <img src={deer} height="20px" alt='deer' />
                        <span>Profesor</span>
                    </li>
                </NavLink>
                <NavLink className={logged && user_type == 1 ? 'nav-link' + ' authorized' : 'nav-link' + ' notauthorized'} to="administracion">
                    <li>
                        <img src={deer} height="20px" alt='deer' />
                        <span>Administracion</span>
                    </li>
                </NavLink>
                <NavLink className='nav-link' to="contacto">
                    <li>
                        <img src={rabbit} height="20px" alt='rabbit' />
                        <span>Contacto</span>
                    </li>
                </NavLink>
                {/* <NavLink className='nav-link' to="login"
                    onMouseEnter={() => setHover('Log-out')}
                    onMouseLeave={() => setHover(email)}
                    onClick={() => {
                        localStorage.removeItem('user') // borramos localstorage
                        window.location.replace("/login");  // redirigimos a login actualizando context
                    }}
                >
                    <li>
                        <img src={rabbit} height="20px" alt='rabbit' />
                        <span >{email ? hover : 'Login'}</span>
                    </li>
                </NavLink> */}
            </ul>
        </nav>
    )
}
