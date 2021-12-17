import React, { useEffect } from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';
import { useHistory } from 'react-router-dom';

const Logout = () => {     
    const history = useHistory()
    useEffect(()=>{
        axiosWithAuth().post('http://localhost:5000/api/logout')
            .then(res=> {
                console.log(res)
                localStorage.removeItem('token')
                history.push('/')
            })
            .catch(err =>{
                console.log(err)
            })
    }, [])   
    return(<div></div>);
}

export default Logout;

// Task List
// 1. On mount, execute a http request to the logout endpoint.
// 2. On a successful request, remove the token from localStorage and redirect to the login page.