import {Route, Routes} from "react-router-dom";
import Home from "../components/Home";
import Login from "../components/Login";
import LibrosLista from "../components/LibrosLista";
import AutoresLista from "../components/AutoresLista";

export const RouteNavigator = () =>{
    return(
        <Routes>
            <Route path='/' element={<Home />} name="home" />
            <Route path='/login' element={<Login  />} name="login" />
            <Route path='/libros' element={<LibrosLista  />} name="libro" />
            <Route path='/autores' element={<AutoresLista />} name="autor" />
        </Routes>
    )
}