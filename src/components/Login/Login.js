import React, { useEffect } from 'react'
import { useState } from 'react'
import { URL_CRUD } from '../../settings';

export const Login = () => {

    const initialState = {
        username: '',
        password: ''
    }

    const [form, setForm] = useState(initialState);
    const { username, password } = form;

    const [token, setToken] = useState(null);

    const hadlechange = e => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    }
    // Obtenemos token
    const handlesubmit = e => {
        e.preventDefault();
        if (username.trim().length > 0 && password.trim().length > 0) {
            const endPoint = 'login_check';
            const options = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(form)
            }
            fetch(`${URL_CRUD}/${endPoint}`, options)
                .then(response => response.json())
                .then(data => {
                    // Cargamos token o mostramos mensaje error
                    (data.token) ? setToken(data) : console.log(data);
                });
        };
    };

    useEffect(() => { // Cuando obtenemos token cargamos usuario
        if (token) {
            const endPoint = `user/${username}`;
            const options = {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + token.token
                }
            }

            const userData = fetch(`${URL_CRUD}/${endPoint}`, options)
                .then(response => response.json())
                .then(data => {
                    setForm(initialState);
                    data.token = token.token;
                    localStorage.setItem('user', JSON.stringify(data)); // guardamos en localstorage
                    window.location.replace("/homepage"); // redirigimos y actualizamos context
                });
        }
    }, [token])

    return (
        <div className="login_main">
            <h1>login</h1>
            <div className='wrapper'>
                <form onSubmit={handlesubmit} className='form'>
                    <label>
                        Email:
                        <input value={username} name='username' type='email' onChange={hadlechange} className='' placeholder='email' />
                    </label>
                    <label>
                        Password:
                        <input value={password} name="password" type='password' onChange={hadlechange} className='' placeholder='password' />
                    </label>
                    <input type="submit" className='button' value="Login" />
                </form>
            </div>
        </div>
    )
}
