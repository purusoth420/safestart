import React, { useState } from 'react'
import '../assets/styles/login.scss'
import Logo from '../assets/login.jpg'
import { useDispatch } from 'react-redux'
import { handleLogin } from '../redux/auth'
import { useNavigate } from 'react-router-dom'
 
const Login = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
 
    const data = {
        email: "",
        password: ""
    }
    const [form, setForm] = useState(data) 

    function handleChange(e, form) {
        const { name, value } = e.target
    
            setForm((x) => ({
                ...x,
                [name]: value
            }))
    
    } 

    async function submitLogin() {
        var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        try {
            if (form.email.match(validRegex) && form.password == '12345678') {
                let data = {
                    isLogin: true,
                    userName: form.email
                }
                dispatch(handleLogin({ ...data, isLogin: true }));
                navigate('/home')
            } else {
                alert("Entered incorrect credentials")
            }
        } catch (error) {
            console.log('login', error);
        }
    }
 
    return (
        <div className='login'>
            <div className='form_'>
                <div className='logo_'>
                    <img src={Logo} />
                </div>
                < div className='right_'>
                    <div className='inputs'>
                        <div className='input_'>
                            <h5>Email</h5>
                            <input placeholder='' type='email' name='email' value={form.email} onChange={(e) => handleChange(e, 'login')}></input>
                        </div>
                        <div className='input_'>
                            <h5>Password</h5>
                            <input placeholder='' type='password' name='password' value={form.password} onChange={(e) => handleChange(e, 'login')} ></input>
                        </div>
                    </div>
                    <div className='btn'>
                        <button onClick={(e) => submitLogin()}>Submit </button>
                    </div>
                </div>  
            </div>
        </div >
    )
}

export default Login