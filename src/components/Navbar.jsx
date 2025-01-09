import {Link} from 'react-router-dom';
import useUser from '../hooks/useUser';
function Navbar(){
    
    const {isLogged, logout} = useUser();

    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <Link className="navbar-brand" to="/">Biblioteca React</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Inicio</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/libros">Libros</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/autores">Autores</Link>
                        </li>
                        {isLogged ? (
                            <li className="nav-item dropdown">
                                <button className="nav-link dropdown-toggle" data-bs-toggle="dropdown"
                                   aria-expanded="false">
                                    Perfil
                                </button>
                                <ul className="dropdown-menu">
                                    <li><button className="dropdown-item" onClick={() => console.log('Sistema')}>Sistema</button></li>
                                    <li><button className="dropdown-item" onClick={() => console.log('Cambiar Pasword')}>Cambiar Pasword</button></li>
                                    <Link className="dropdown-item" to="/login" onClick={logout} >Cerrar Sesion</Link>
                                </ul>
                            </li>

                        ) : (
                            <>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/login">Iniciar sesión</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/login">Registarme</Link>
                                </li>
                            </>
                        ) }
                    </ul>
                </div>
            </div>
        </nav>
    );
}
export default Navbar;