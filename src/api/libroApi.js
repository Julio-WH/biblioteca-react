import axios from 'axios'

const API_URL=`${process.env.REACT_APP_API_URL}/api/v1/books/`;

export const ListBooksApi = async(body) => {
    return new Promise((resolve, reject)=>{
        axios.get(API_URL, body)
            .then(res=>{
                if(res.status == 200){
                    resolve(res.data)
                }
                else{
                    reject({"status":res.status})
                }
            }).catch(error=>reject(error))
    });
}