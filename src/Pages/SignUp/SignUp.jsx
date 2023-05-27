import { updateProfile } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { toast } from 'react-hot-toast';
import { FaEye, FaEyeSlash, FaGithub, FaGoogle } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { authContext } from '../../AuthProvider/Provider';
import loginImage from "../../assets/others/authentication2.png";

const SignUp = () => {
    const [showEye, setShowEye] = useState(false);
    const [showPass, setShowPass] = useState(false);
    const [passError, setPassError] = useState('');
    const [isPassOk, setIsPassOk] = useState(false);
    const { user, loading, continueWithGithub, continueWithGoogle, signUpWithEmailPass } = useContext(authContext);
    const navigate = useNavigate();


    // signUp user with email and password
    function handleSignUp(e) {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        if (isPassOk) {
            signUpWithEmailPass(email, password)
                .then(res => {
                    toast.success('SignUp Successful');
                    updateProfile(res.user, { displayName: name });
                    form.reset();
                    navigate('/');
                })
                .catch(err => {
                    toast.error(err.message.slice(22, -2).replace(/-/g, ' '));
                    console.log(err.message);
                })
        }
        else {
            toast.error('Password is not valid');
        }
    }
    // SignUp user with Google
    function handleGoogleSignUp() {
        continueWithGithub()
            .then(res => {
                toast.success('SignUp Successful');
                navigate('/');
            })
            .catch(err => {
                toast.error('Something wrong! Check console');
                console.log(err.message);
            })
    }
    // SignUp user with email and password
    function handleGithubSignUp() {
        continueWithGoogle()
            .then(res => {
                toast.success('SignUp Successful');
                navigate('/');
            })
            .catch(err => {
                toast.error('Something wrong! Check console');
                console.log(err.message);
            })

    }
    // listening password on every change
    function handlePassChange(e) {
        const pass = e.target.value;
        if (!/(?=.*[A-Z])/.test(pass)) {
            setPassError('Password must contain a uppercase letter');
            setIsPassOk(false);
        }
        else if (!/(?=.*[0-9].*[0-9])/.test(pass)) {
            setPassError('Password must contain at least two numbers');
            setIsPassOk(false);
        }
        else if (!/(?=.*[!@#$%^&*+=])/.test(pass)) {
            setPassError('Password must contain a special character');
            setIsPassOk(false);
        }
        else if (pass.length < 6) {
            setPassError('Password must contain minimum six characters');
            setIsPassOk(false);
        }
        else {
            setIsPassOk(true);
            setPassError('');
        }
        validatePass(pass);
    }
    // Validating the password that user have written
    function validatePass(pass) {
        if (pass.length > 0) {
            setShowEye(true);
        } else {
            setShowEye(false);
            setPassError('');
        }
    }

    return (
        <>
            <Helmet>
                <title>Bistro Boss | SignUp</title>
            </Helmet>
            <section className="bg-formBg bg-cover bg-no-repeat lg:h-screen flex justify-center items-center p-5">
                <article className='flex flex-col md:flex-row-reverse gap-5 justify-center items-center shadow-2xl md:w-4/5'>
                    <div className='md:w-1/2 lg:w-2/5 flex justify-center items-center'>
                        <img src={loginImage} alt="" className='mt-5 md:mt-0' />
                    </div>
                    <div className='w-full md:w-1/2 lg:w-2/5 my-auto px-0 lg:px-4'>
                        <form onSubmit={handleSignUp} className='text-left rounded-md py-3 px-6 lg:px-14 space-y-3 w-full text-black'>
                            <h2 className="text-2xl text-gray-700 text-center font-semibold rounded-md my-5">SignUp</h2>
                            <div className='space-y-2'>
                                <label htmlFor="name" className='text-sm text-gray-600 font-bold'>Name</label><br />
                                <input type="text" name='name' placeholder='Your name' className='p-2 w-full border focus:ring duration-500 ring-gray-300 bg-white focus:outline-0 rounded-md placeholder:text-xs placeholder:tracking-[4px]' required />
                            </div>
                            <div className='space-y-2'>
                                <label htmlFor="email" className='text-sm text-gray-600 font-bold'>Email</label><br />
                                <input type="email" name='email' placeholder='Your email' className='p-2 w-full border focus:ring duration-500 ring-gray-300 bg-white focus:outline-0 rounded-md placeholder:text-xs placeholder:tracking-[4px]' required />
                            </div>
                            <div className='space-y-2'>
                                <label htmlFor="password" className='text-sm text-gray-600 font-bold'>Password</label><br />
                                <div className='space-y-2'>
                                    <div className='relative mb-6'>
                                        <input onChange={handlePassChange} type={showPass ? 'text' : "password"} name='password' placeholder='Your password' className='p-2 w-full border focus:ring duration-500 ring-gray-300 bg-white focus:outline-0 rounded-md placeholder:text-xs placeholder:tracking-[4px]' required />
                                        {showEye && <p onClick={() => { setShowPass(!showPass) }} className='absolute right-2 top-[5px] cursor-pointer p-2 hover:bg-gray-100 rounded-full'>
                                            {
                                                showPass ?
                                                    <FaEye className='text-[#ecb664] h-4 w-4' />
                                                    :
                                                    <FaEyeSlash className='text-[#f5c071] h-4 w-4' />
                                            }
                                        </p>}
                                        <p className="text-xs text-[#e2a345] absolute -bottom-5 left-1">{passError}</p>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <button type='submit' className='w-full py-3 bg-[#D1A054] text-white font-semibold cursor-pointer rounded-md hover:bg-[#99743d] duration-500 mt-2'>Sign Up</button>
                            </div>
                            <div className='flex w-full items-center justify-center'>
                                <hr className='w-1/4 border-gray-300' />
                                <p className='text-center text-xs text-gray-500 px-2'>Or Continue with</p>
                                <hr className='w-1/4 border-gray-300' />
                            </div>
                            <div className='flex items-center justify-center gap-4'>
                                <p onClick={handleGithubSignUp} className='border border-gray-500 duration-300 p-2 cursor-pointer rounded-full text-gray-600 hover:text-white hover:bg-gray-500'><FaGoogle className='h-5 w-5' /></p>
                                <p onClick={handleGoogleSignUp} className='border border-gray-500 duration-300 p-2 cursor-pointer rounded-full text-gray-600 hover:text-white hover:bg-gray-500'><FaGithub className='h-5 w-5' /></p>
                            </div>
                            <div>
                                <p className="text-sm text-center text-gray-600">Already have an account? <Link to={'/login'} className='text-[#cc8317]'>Login</Link></p>
                            </div>
                        </form>
                    </div>
                </article>
            </section>
        </>
    );
};

export default SignUp;