import useUser from '../hooks/useUser';

function Home() {
    const {jwt, isLogged} = useUser();

    return (
        <div>
            <h1>Biblioteca hecha con React</h1>
            <div>
                {isLogged ? (
                    <div>
                        <h2>Bienvenido, {jwt.username || 'Usuario'}!</h2>
                    </div>
                ) : (
                    ''
                )}
            </div>
        </div>
    );
}

export default Home;
