import axios from 'axios'

const API_URL=`${process.env.REACT_APP_API_URL}/api/v1/auth/login`;

export const loginApi = async(body) => {
    return new Promise((resolve, reject)=>{
        console.log("API_URL", API_URL)
        axios.post(API_URL, body)
            .then(res=>{
                resolve(res.data)
            }).catch(error=>reject(error))
    });
}