import React from 'react'
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Header } from '../common/Header'
import { Footer } from '../common/Footer'
import { HomePage } from '../HomePage/HomePage'
import { Students } from '../Students/Students'
import { Teachers } from '../Teachers/Teachers'
import { Management } from '../Management/Management'
import { Login } from '../Login/Login';
import { useContext } from 'react'
import { AuthContext } from '../../auth/authContext'
import { Navigate } from 'react-router-dom'
import { Contact } from '../Contact/Contact';

export const AppRouter = () => {

    const context = useContext(AuthContext);

    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="homepage" element={<HomePage />} />
                <Route path="alumno" element={context.logged ? <Students /> : <Navigate to='/login' />} />
                <Route path="profesor" element={context.logged && context.user_type == 1 ? <Teachers /> : <Navigate to='/login' />} />
                <Route path="administracion" element={context.logged && context.user_type == 1 ? <Management /> : <Navigate to='/login' />} />
                <Route path="contacto" element={<Contact />} />
                <Route path="login" element={<Login />} />
                <Route path="*" element={<HomePage />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}
