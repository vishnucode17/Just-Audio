import React from 'react';
import '../static/css/auth.css';
import signup from '../static/images/signup.svg';

function AuthTemplate(props) {
    return (
        <div className="auth-template">
            <div className="auth_section">
                <div className="auth_banner">
                    <img id="auth_banner_img" src={signup} alt="" />
                </div>
                <div className="auth_intro">
                    <h1 id="auth_head">{props.title}</h1>
                    <form method="post" action={props.fill_action}>
                        {props.fields.map((data) => (
                            <input key={data.id} type={data.type} placeholder={data.value} id="input_field" name={data.value.toLowerCase()} />
                            
                        ))}

                    </form>
                    {props.haveaccount ?  <a href="/login">Already have an account?</a> :  <a href="/signup">Don't have an account?</a>}
                </div>
            </div>
        </div>
    )
}
export default AuthTemplate;