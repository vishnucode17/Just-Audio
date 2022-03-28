import React, { useState, useEffect } from 'react';
import '../static/css/auth.css';
import signup from '../static/images/signup.svg';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
function Login(props) {
    const url="http://localhost:8000/login";
    const navigate = useNavigate();
    const [user, setUser] = useState({
        username: '',
        password: '',
    });
    function submit(e) {
        e.preventDefault();
        axios.post(url, {
            username: user.username,
            password: user.password,
        })
            .then(res => {
                console.log(res);
                console.log(res.status);
                if (res.status === 200){
                    console.log("Just Audio welcomes you");
                    localStorage.setItem('token', res.data.token);
                    localStorage.setItem('user', JSON.stringify(res.data.user));
                    navigate('/');
                }
                if (!user.username) {
                    alert('Username is required');
                }
                if (!user.password) {
                    alert('Password is required');
                }
                if (res.status===422){
                    alert('Username or password is incorrect');
                }

            })

    }
    return (
        <div className="auth-template">
            <div className="auth_section">
                <div className="auth_banner">
                    <img id="auth_banner_img" src={signup} alt="" />
                </div>
                <div className="auth_intro">
                    <h1 id="auth_head">Login</h1>
                    <form method="post" onSubmit={(e) => submit(e)} encType='multipart/form-data'>
                        <input type="text" placeholder="Username" className="input_field" name="username" onChange={
                            (e) => {
                                setUser({ ...user, username: e.target.value });
                            }
                        } />
                        
                        <input type="password" placeholder="Password" className="input_field" name="username" onChange={
                            (e) => {
                                setUser({ ...user, password: e.target.value });
                            }
                        } />
                       
                        <button type="submit" className="auth_button">Login</button>



                    </form>
                    <a href="/signup" id="acc_have">Don't have an account?</a>

                </div>
            </div>
        </div>
    )
}
export default Login;