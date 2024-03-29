import React, {useRef, useState} from 'react'
import { updateProfile, getAuth, signInWithPopup, GoogleAuthProvider, FacebookAuthProvider } from "firebase/auth";
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import {auth, authentication} from '../firebase'




import {useAuth} from '../Contexts/AuthContext'
import '../Dist/Pages/register.css'
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LockResetIcon from '@mui/icons-material/LockReset';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Facebook from './../assets/svg/Facebook.svg';
import Google from './../assets/svg/Google.svg';
import HomeIcon from '@mui/icons-material/Home';
import {getRandomColor,createImageFromInitials} from './../Components/Utils/Profile'


import Fill1 from '../Assets/svg/Background/Fill 1.svg'
import Fill2 from '../Assets/svg/Background/Fill 2.svg'
import Fill3 from '../Assets/svg/Background/Fill 3.svg'
import Fill4 from '../Assets/svg/Background/Fill 4.svg'
import Fill5 from '../Assets/svg/Background/Fill 5.svg'
import Fill6 from '../Assets/svg/Background/Fill 6.svg'

import { useNavigate } from "react-router-dom";

const Background = () => {
    return(
        <div className="Background">
            <div className='Rectangle'></div>
            <div className="Random">
                <img src={Fill1} className="Fill Fill1"/>
                <img src={Fill2} className="Fill Fill2"/>
                <img src={Fill3} className="Fill Fill3"/>
                <img src={Fill5} className="Fill Fill4"/>
                <img src={Fill5} className="Fill Fill5"/>
                <img src={Fill6} className="Fill Fill6"/>
            </div>

            <div className="Oval"></div>
        </div>
    )
}



function Register() {
    const usernameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmationRef = useRef();
    const { signup, currentUser } = useAuth();
    const [error, setError] = useState('')
    const [loading, setLoading] = useState('')

    let navigate = useNavigate(); 
    const Login = () => { 
        let path = `/login`; 
        navigate(path);
    }

    const Home = () => {
        navigate('/')
    }

    async function handleSubmit(e) {
        e.preventDefault()

        if (passwordRef.current.value !== passwordConfirmationRef.current.value){
            return setError('Passwords do not match');
        }

        try {
            setError('')
            setLoading(true)
            await signup(emailRef.current.value, passwordRef.current.value)

            auth.currentUser.updateProfile({
                displayName: usernameRef.current.value
              }).then(() => {
              }).catch((error) => {
                console.log('An error was occured while updating the profile: ' + error)
            });
            Home()
        } catch {
            setError('Failed to create an account')
        }
        setLoading(false)
    }

    const SignInWithGoogle = () => {
        const Google = new GoogleAuthProvider();
        signInWithPopup(authentication, Google)
        .then((re) => {
            console.log(re)
        })
        .catch((err) => {
            return console.log(err)
        })

        Home()
    }

    function SignInWithFacebook() {
        const Facebook = new FacebookAuthProvider();
        signInWithPopup(authentication, Facebook)
        .then((re) => {
            console.log(re)
        })
        .catch((err) => {
            return console.log(err)
        })

        Home()
    }
    

    return (
        <div className="Register">
            <Background/>
            <div className='Register-Container'>

                <div className='head'>
                    <HomeIcon onClick={Home}/>
                    <h1>Create a new account</h1>
                </div>
                {error &&  alert(error)}

                <form onSubmit={handleSubmit}>
                    <label className='Username'>
                        <span><AccountCircleOutlinedIcon/></span>
                        <input type='text' placeholder='Username' ref={usernameRef} required/>
                    </label>

                    <label className='E-mail'>
                        <span><EmailOutlinedIcon/></span>
                        <input type='email' placeholder='E-mail' ref={emailRef} required/>
                    </label>
 
                    <label className='Password'>
                        <span><LockOutlinedIcon/></span>
                        <input type='password' placeholder='Password' ref={passwordRef} required/>
                    </label>

                    <label className='RepeatPassword'>
                        <span><LockResetIcon/></span>
                        <input type='password' placeholder='Repeat Password' ref={passwordConfirmationRef} required/>
                    </label>

                    <button disabled={loading} type='submit'>Sign up</button>
                </form>

                <div className='API'>
                    <div className='Continue'>
                        <hr/>
                        <p>or register with</p>
                        <hr/>
                    </div>

                    <div className='Choice'>
                        <div className='Company Facebook' onClick={SignInWithFacebook}>
                            <img src={Facebook}/>
                            <p>Facebook</p>
                        </div>

                        <div className='Company Google' onClick={SignInWithGoogle}>
                            <img src={Google}/>
                            <p>Google</p>
                        </div>
                    </div>
                </div>

                <div className='Sign-up'>
                    <p>Already have an account? <span onClick={Login}>Sign in</span></p>
                </div>

            </div>
        </div>
    )
}

export default Register;