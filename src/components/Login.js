import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios'

const Login = () => {
    const [login, setLogin] = useState({
        username: '',
        password: '',
        error: '',
    })
    const handleChange = (e) => {
        setLogin({
            ...login,
            [e.target.name]: e.target.value
        })
        console.log(login)
    }
    
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(login.username)
        console.log(login.password)
        axios.post('http://localhost:5000/api/login', {
            username: login.username,
            password: login.password
        })
            .then(res=>{
                console.log(res)
                localStorage.setItem('token', res.data.token)
            })
            .catch(err=>{
                console.log(err)
                setLogin({
                    ...login,
                    error: 'LOGIN ERROR'
                })
            })
    }
    return(<ComponentContainer>
        <ModalContainer>
            <h1>Welcome to Blogger Pro</h1>
            <h2>Please enter your account information.</h2>
            <Label>
                Username
            </Label>
            <Input
            id='username'
            type='text'
            name='username'
            onChange={handleChange}
            value={login.username}
            ></Input>
            <Label>
                Password
            </Label>
            <Input 
            id='password'
            type='password'
            name='password'
            onChange={handleChange}
            value={login.password}
            ></Input>
            <p id='error'>{login.error}</p>
            <Button onClick={handleSubmit}>Login</Button>
        </ModalContainer>
    </ComponentContainer>);
}

export default Login;

//Task List
//1. Build login form DOM from scratch, making use of styled components if needed. Make sure the username input has id="username" and the password input as id="password".
//2. Add in a p tag with the id="error" under the login form for use in error display.
//3. Add in necessary local state to support login form and error display.
//4. When login form is submitted, make an http call to the login route. Save the auth token on a successful response and redirect to view page.
//5. If the response is not successful, display an error statement. **a server provided error message can be found in ```err.response.data```**
//6. MAKE SURE TO ADD id="username", id="password", id="error" AND id="submit" TO THE APPROPRIATE DOM ELEMENTS. YOUR AUTOTESTS WILL FAIL WITHOUT THEM.

const ComponentContainer = styled.div`
    height: 70%;
    justify-content: center;
    align-items: center;
    display:flex;
`

const ModalContainer = styled.div`
    width: 500px;
    background: white;
    padding: 2rem;
    text-align: center;
`

const Label = styled.label`
    display: block;
    text-align: left;
    font-size: 1.5rem;
`

const FormGroup = styled.form`
    padding:1rem;
`

const Input = styled.input`
    font-size: 1rem;
    padding: 1rem 0;
    width:100%;
`

const Button = styled.button`
    padding:1rem;
    width: 100%;
`
