import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginApi } from "../api/auth";

function Login({ setLoggedIn }) {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });
    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validación simple
        if (!formData.username || !formData.password) {
            setErrorMessage('Por favor, completa todos los campos.');
            return;
        }

        try {
            const res = await loginApi(formData);
            // Guardar el token en sessionStorage
            sessionStorage.setItem('authToken', res.tokenSession);

            setLoggedIn(true);
            navigate('/');
        } catch (error) {
            console.error('Error en la autenticación:', error);
            setErrorMessage('Usuario o contraseña incorrectos.');
        }
    };

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card mt-5">
                        <div className="card-header">Iniciar sesión</div>
                        <div className="card-body">
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label htmlFor="username" className="form-label">Nombre de usuario</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="username"
                                        name="username"
                                        value={formData.username}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="password" className="form-label">Contraseña</label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        id="password"
                                        name="password"
                                        value={formData.password}
                                        onChange={handleChange}
                                    />
                                </div>

                                {errorMessage && (
                                    <div className="alert alert-danger" role="alert">
                                        {errorMessage}
                                    </div>
                                )}

                                <button type="submit" className="btn btn-primary">Iniciar sesión</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
