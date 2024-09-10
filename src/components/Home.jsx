import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import jwtDecode from 'jwt-decode'; // Importa jwt-decode

function Home() {
    const [userData, setUserData] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        try {
            const authToken = sessionStorage.getItem('authToken');
            if (authToken) {
                // Usamos jwt-decode para decodificar el token
                const decoded = jwtDecode(authToken);
                setUserData(decoded);
            } else {
                // Si no hay token, redirigir a la página de login
                navigate('/login');
            }
        } catch (error) {
            console.error('Error al leer los datos del usuario:', error);
            navigate('/login');
        }
    }, [navigate]);

    return (
        <div>
            <h1>Biblioteca hecha con React</h1>
            <div>
                {userData ? (
                    <div>
                        <h2>Bienvenido, {userData.username || 'Usuario'}!</h2>
                    </div>
                ) : (
                    ''
                )}
            </div>
        </div>
    );
}

export default Home;
