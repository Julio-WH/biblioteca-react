import CardLibro from "./CardLibro";
import {ListBooksApi} from "../api/libroApi";
import {useEffect, useState} from "react";


function LibrosLista() {

    const [listaLibro, setlistaLibro] = useState([]);

    useEffect(()=>{
        async function  getBooks(){
            try{
                const res = await ListBooksApi();
                setlistaLibro(res)
            }catch(e){
                console.error(e);
            }
        }
        getBooks();
    }, [])

    return (
        <>

            <div className="row row-cols-1 row-cols-md-4 g-4">
                {listaLibro.map(function(element, index, array){
                    return  <CardLibro  data={element} key={index}/>
                })}

            </div>
        </>
    );
}
export default LibrosLista;