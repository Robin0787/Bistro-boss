import React, { useContext, useEffect, useRef, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { toast } from 'react-hot-toast';
import { FaEye, FaEyeSlash, FaGithub, FaGoogle } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { LoadCanvasTemplate, loadCaptchaEnginge, validateCaptcha } from 'react-simple-captcha';
import { authContext } from '../../AuthProvider/Provider';
import loginImage from "../../assets/others/authentication2.png";

const Login = () => {
    const [showEye, setShowEye] = useState(false);
    const [showPass, setShowPass] = useState(false);
    const emailRef = useRef();
    const captchaRef = useRef();
    const { continueWithGithub, continueWithGoogle, loginWithEmailPass, passReset } = useContext(authContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    // Login the user with email and password;
    function handleLogin(e) {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        const captcha = form.captcha.value;
        if (validateCaptcha(captcha, false) == true) {
            loginWithEmailPass(email, password)
                .then(res => {
                    toast.success('Login Successful');
                    setShowEye(false);
                    form.reset();
                    navigate(from, { replace: true });
                })
                .catch(err => {
                    toast.error(err.message.slice(22, -2).replace(/-/g, ' '));
                })
        }
        else {
            toast.error("Captcha doesn't match");
        }
    }
    // Login the user with Google
    function handleGoogleLogin() {
        continueWithGithub()
            .then(res => {
                toast.success('SignUp Successful');
                const { displayName, email } = res.user;
                fetch(`http://localhost:1000/users`, {
                    method: "POST",
                    headers: { 'content-type': 'application/json' },
                    body: JSON.stringify({ displayName, email })
                });
                navigate(from, { replace: true });
            })
            .catch(err => {
                toast.error('Something wrong! Check console');
                console.log(err.message);
            })
    }
    // Login the user with Github
    function handleGithubLogin() {
        continueWithGithub()
            .then(res => {
                toast.success('SignUp Successful');
                const { displayName, email } = res.user;
                fetch(`http://localhost:1000/users`, {
                    method: "POST",
                    headers: { 'content-type': 'application/json' },
                    body: JSON.stringify({ displayName, email })
                })
                    .then(res => res.json())
                    .then(data => { })
                navigate(from, { replace: true });
            })
            .catch(err => {
                toast.error('Something wrong! Check console');
                console.log(err.message);
            })
    }
    // listening the password on every change
    function handlePassChange(e) {
        const pass = e.target.value;
        if (pass.length > 0) {
            setShowEye(true);
        } else {
            setShowEye(false);
        }
    }
    // Reset the password for login
    function handleResetPass() {
        const email = emailRef.current.value;
        const captcha = captchaRef.current.value;
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
            if (validateCaptcha(captcha, false) == true) {
                passReset(email)
                    .then(() => {
                        toast.success('Reset Email Sent');
                    })
                    .catch(err => {
                        toast.error(err.message.slice(22, -2).replace(/-/g, ' '));

                    })
            }
            else {
                toast.error("Captcha doesn't match");
            }
        }
        else if (email.length < 1) {
            toast.error('Write your email first');
            emailRef.current.focus();
        }
        else {
            toast.error("Invalid Email");
        }
    }

    // Setting captcha verification
    useEffect(() => {
        loadCaptchaEnginge(6);
    }, []);


    return (
        <>
            <Helmet>
                <title>Bistro Boss | Login</title>
            </Helmet>
            <section className='bg-formBg bg-cover lg:h-screen flex justify-center items-center p-5'>
                <article className='flex flex-col md:flex-row gap-4 justify-center items-center 
            shadow-2xl md:w-4/5'>
                    <div className='md:w-1/2 lg:w-2/5 flex justify-center items-center'>
                        <img src={loginImage} alt="" className='mt-5 md:mt-0' />
                    </div>
                    <div className='w-full md:w-1/2 lg:w-2/5 my-auto px-0 lg:px-4'>
                        <form onSubmit={handleLogin} className='text-left rounded-md py-5 px-6 lg:px-14 space-y-3 w-full text-black'>
                            <h2 className="text-2xl text-gray-700 text-center font-bold my-5">Login</h2>
                            <div className='space-y-2'>
                                <label htmlFor="email" className='text-sm font-bold text-gray-600'>Email</label><br />
                                <input type="email" ref={emailRef} name='email' placeholder='Your email' className='p-2 w-full border focus:ring duration-500 ring-gray-300 bg-white focus:outline-0 placeholder:tracking-[4px] rounded-md placeholder:text-xs' required />
                            </div>
                            <div className='space-y-2'>
                                <label htmlFor="password" className='text-sm font-bold text-gray-600'>Password</label><br />
                                <div className='space-y-1'>
                                    <div className='relative'>
                                        <input onChange={handlePassChange} type={showPass ? 'text' : "password"} name='password' placeholder='Your password' className='p-2 w-full border focus:ring duration-500 ring-gray-300 bg-white focus:outline-0 rounded-md placeholder:text-xs placeholder:tracking-[4px]' required />
                                        {showEye && <p onClick={() => { setShowPass(!showPass) }} className='absolute right-2 top-[5px] cursor-pointer p-2 hover:bg-gray-100 rounded-full'>
                                            {
                                                showPass ?
                                                    <FaEye className='text-[#f0b968] h-4 w-4' />
                                                    :
                                                    <FaEyeSlash className='text-[#e7af5b] h-4 w-4' />
                                            }
                                        </p>}
                                    </div>
                                    <p className='text-xs text-gray-500'>forgot password? <span className='text-[#f09e23] cursor-pointer' onClick={handleResetPass}>reset</span></p>
                                </div>
                            </div>
                            <div className='space-y-2'>
                                <div className='w-full text-xs'>
                                    <LoadCanvasTemplate />
                                </div>
                                <input type='text' name='captcha' ref={captchaRef} placeholder='Type here' className='p-2 w-full border focus:ring duration-500 ring-gray-300 tracking-[7px] bg-white focus:outline-0 rounded-md placeholder:text-xs' required />
                            </div>
                            <div>
                                <button type='submit' className='w-full py-3 bg-[#D1A054] text-white font-semibold cursor-pointer rounded-md hover:bg-[#99743d] duration-500 disabled:opacity-70'>Login</button>
                            </div>
                            <div className='flex w-full items-center justify-center'>
                                <hr className='w-1/4 border-gray-300' />
                                <p className='text-center text-xs text-gray-500 px-2'>Or Continue with</p>
                                <hr className='w-1/4 border-gray-300' />
                            </div>
                            <div className='flex items-center justify-center gap-4'>
                                <p onClick={handleGoogleLogin} className='border border-gray-500 duration-300 p-2 cursor-pointer rounded-full text-gray-600 hover:text-white hover:bg-gray-500'><FaGoogle className='h-5 w-5' /></p>
                                <p onClick={handleGithubLogin} className='border border-gray-500 duration-300 p-2 cursor-pointer rounded-full text-gray-600 hover:text-white hover:bg-gray-500'><FaGithub className='h-5 w-5' /></p>
                            </div>
                            <div>
                                <p className="text-sm text-center text-gray-600">Don't have an account? <Link to={'/signUp'} className='text-[#ce861b]'>SignUp</Link></p>
                            </div>
                        </form>
                    </div>
                </article>
            </section>
        </>
    );
};

export default Login;