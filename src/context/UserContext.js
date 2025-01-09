import React, { useState } from "react";

// Creación del contexto
const Context = React.createContext({})

// Componente que provee el contexto
export function UserContextProvider({children}) {
    const [jwt, setJWT] = useState(null); // Estado del JWT

    return (
        <Context.Provider value={{jwt, setJWT}}> {/* Aquí estás proveyendo el valor */}
            {children} {/* Aquí se pasa todo lo que se envuelva en el proveedor */}
        </Context.Provider>
    );
}

export default Context; // Exportando el contexto para consumirlo
