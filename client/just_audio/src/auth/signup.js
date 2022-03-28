import React, { useState, useEffect } from 'react';
import '../static/css/auth.css';
import signup from '../static/images/signup.svg';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
function Signup(props) {
    const [data, setData] = useState([]);
    const url="http://localhost:8000/register";
    const navigate = useNavigate();
    const [user, setUser] = useState({
        username: '',
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
    });
    // useEffect((e) => {
    //     e.preventDefault();
    //     const { username, name, email, password, confirmPassword } = user;
    //     const res = await fetch('/register', {
    //         method: "POST",
    //         headers: {
    //             "Content-Type": "application/json"
    //         },
    //         body: JSON.stringify({
    //             username,
    //             name,
    //             email,
    //             password,
    //             confirmPassword
    //         })
    //     });

    //     const data = await res.json();


    //     if (res.status === 422 || !data) {
    //         window.alert("Please add all the fields");
    //         console.log("Please add all the fields");
    //     }
    //     else {
    //         window.alert("Successfully registered");
    //         navigate.push('/login');
    //     }

    // },[user]);
    // const register=(e)=>{
    //     e.preventDefault();
    //     const { username, name, email, password, confirmPassword } = user;
    //     if (password !== confirmPassword) {
    //         window.alert("Password and Confirm Password does not match");
    //         return;
    //     }
    //     axios.post('http://localhost:8000/register', {
    //         username,
    //         name,
    //         email,
    //         password,
    //     })
    //         .then(res => console.log(res))
    // }
    async function submit(e) {
        e.preventDefault();
        const result=await axios.post(url, {
            username: user.username,
            name: user.name,
            email: user.email,
            password: user.password,
        })
            .then(res => {
                console.log(res);
                // navigate.push('/login');
            })
            .catch(err => {
                console.log(err);
            }
            );
        // if (res.status === 422 || !data) {
        //     window.alert("Please add all the fields");
        //     console.log("Please add all the fields");
        // }
        // else {
        //     window.alert("Successfully registered");
        //     navigate.push('/login');
        // }


    }
    return (
        <div className="auth-template">
            <div className="auth_section">
                <div className="auth_banner">
                    <img id="auth_banner_img" src={signup} alt="" />
                </div>
                <div className="auth_intro">
                    <h1 id="auth_head">Sign Up</h1>
                    <form method="post" onSubmit={(e) => submit(e)}>
                        <input type="text" placeholder="Username" className="input_field" name="username" onChange={
                            (e) => {
                                setUser({ ...user, username: e.target.value });
                            }
                        } />
                        <input type="text" placeholder="Name" className="input_field" name="name" onChange={
                            (e) => {
                                setUser({ ...user, name: e.target.value });
                            }
                        } />
                        <input type="email" placeholder="Email" className="input_field" name="email" onChange={
                            (e) => {
                                setUser({ ...user, email: e.target.value });
                            }
                        } />
                        <input type="password" placeholder="Password" className="input_field" name="username" onChange={
                            (e) => {
                                setUser({ ...user, password: e.target.value });
                            }
                        } />
                        <input type="password" placeholder="Confirm Password" className="input_field" name="username" onChange={
                            (e) => {
                                setUser({ ...user, confirmPassword: e.target.value });
                            }
                        } />
                        <button type="submit" className="auth_button">Sign Up</button>



                    </form>
                    <a href="/login" id="acc_have">Already have an account?</a>
                </div>
            </div>
        </div>
    )
}
export default Signup;