import React, { useState } from 'react'
import '../App.css';
import {users} from '../data/user.js';
import Home from './Home';
const Login = () => {

    //Estados
    const [usuarios, setUsuarios] = useState(users);
    const [currentUser, setcurrentUser] = useState({
        email: '',
        pass: '',
        goals: []
    });

    const [buttonTitle, setButtonTitle] = useState("Login");
    const [button2Title, setButton2Title] = useState("Sign Up");
    const [show, setShow] = useState(true);
   //////////

   //Funciones

    const handleChange = e => {
        const {name, value} = e.target;
        setcurrentUser({
            ...currentUser,
            [name]: value
        });
        console.log(currentUser);
    }

   //
    const handleChangeMode = () => {
        if(buttonTitle === "Login")
        {
            setButtonTitle("Sign Up"); 
            setButton2Title("Login");
        }
        if(buttonTitle === "Sign Up") 
        {
            setButtonTitle("Login"); 
            setButton2Title("Sign Up");   
        }
    }

    //
    const handleLogout = () => {
        setShow(!show);
        setcurrentUser({
            email: '',
            pass: '',
            goals: []
        });
    }

    //
    const handleLogin = () => {

        if(buttonTitle === "Login"){

            let user = usuarios.find(user => user.email === currentUser.email && user.pass === currentUser.pass);
            if(user){
                setcurrentUser(user);
                alert("Bienvenido");
                setShow(false);
            }else{
                alert("Incorrecto");
            }
        }else{

            if(usuarios.some(user => user.email === currentUser.email)){
                alert("Usuario Existente");
                return;
            }

            let listuser = usuarios;
            listuser.push(currentUser);
            setUsuarios(listuser);
            alert("Registrado");
        }

    }

    //Render
    return (
        <>
            <div className="d-flex justify-content-center">
                {show ? 
                <div className="card box mt-5">
                    <div className="card-header bg-secondary p-4 text-center text-white"><h3>My Daily Goals</h3></div>
                    <div className="card-body">
                        <div className="form-group">
                            <input type="email" className="text form-control" placeholder="Email" name="email" onChange={handleChange} />
                        </div>
                        <div className="form-group mt-4">
                            <input type="text" className="text form-control" placeholder="Pass" name="pass" onChange={handleChange}/>
                        </div>
                       
                        <button style={{width:"100%"}} onClick={handleLogin} className="btn btn-primary btn-lg mt-3">{ buttonTitle }</button>
                        
                        <h6 href="false" onClick={handleChangeMode} className="mt-3 linky">{button2Title}</h6>
                    </div>
                </div>
                :
                    <div>
                        <nav className="navbar navbar-dark bg-dark p-3 mb-3">
                            <span className="navbar-brand mb-0 h1 text-center">My Daily Goals - {new Date().toDateString()}</span>
                            <span className="btn btn-outline-danger" onClick={handleLogout}>Log out</span>
                        </nav>
                        <Home
                        user = {currentUser}
                        />
                    </div>
                }
            </div>
        </>
    );

}

export default Login;