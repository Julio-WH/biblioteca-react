import {Link} from 'react-router-dom';
function Navbar({loggedIn}){
    const userData = JSON.parse(localStorage.getItem('dataUser'));
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
                        {userData ? (
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                                   aria-expanded="false">
                                    Perfil
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Sistema</a></li>
                                    <li><a className="dropdown-item" href="#">Cambiar Pasword</a></li>
                                    <li><a className="dropdown-item" href="#">Cerrar Sesion</a></li>
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