import React, { useState } from 'react'
import { useContext } from 'react'
import { AuthContext } from '../../auth/authContext'
import { HeaderSmall } from './HeaderSmall'
import { HeaderMedium } from './HeaderMedium'

export const Header = () => {

    const context = useContext(AuthContext);

    const [hover, setHover] = useState(context?.email); // cambiar texto login en hover

    return (
        <header className="header__main">
            <HeaderSmall context={context} hover={hover} setHover={setHover} />
            <HeaderMedium context={context} hover={hover} setHover={setHover} />
        </header >
    )
}