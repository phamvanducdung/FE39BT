import Sideright from '../src/assets/images/Sideright.png'
import Travling from '../src/assets/images/Travling.png'
import Googleicon from '../src/assets/images/google.svg'
import Facebookicon from '../src/assets/images/facebook.svg'
import {useNavigate} from 'react-router-dom';
import { useState } from 'react';
function Login() {

    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onLogin = () => {
        // handle from: email, password is correct ?
        if (!email) {
			return alert('Email is required');
		}
		if (!password) {
			return alert('Password is required');
		}
		if (password?.length < 8) {
			return alert('Password must min 8 characters');
		}

        // if true then navigate
    alert('Login thanh cong ' + email + ' | ' + password);
        navigate('/');
    }

    return (
        <div className=''>
            <div className='grid grid-cols-2 m-4'>
                <div className=''>
                    <div>
                        <img className='mt-2 h-[35px] w-[141px]' src={Travling} alt="" />
                    </div>
                    <div className=' m-[50px] p-[40px] inline-flex flex-col items-start gap-[24px]'>
                        <form className='w-[400px] ' action="">
                            <div className='flex flex-nowrap justify-between items-center self-stretch '>
                                <h2 className='font-medium text-[25px]'>Masuk</h2>
                                <a className='font-normal text-sky-400/100 text-[15px]' href="">Daftar</a>
                            </div>
                            <div>
                                <input className='w-full h-[50px] mt-[25px] rounded border border-gray-300 pl-[10px]' placeholder='Nomor Ponsel atau Email' type="email" value={email} onChange={(event) =>setEmail(event.target.value)} />
                                <input className='w-full h-[50px] mt-[15px] rounded border border-gray-300 pl-[10px]' placeholder='Kata Sandi' type="password" value={password} onChange={(event) =>setPassword(event.target.value)} />
                            </div>
                            <div>
                                <button className='w-full h-[50px] mt-[30px] rounded bg-slate-300' onClick={onLogin}>
                                    <p className='font-bold text-white'>MASUK</p>
                                </button>
                            </div>
                            <div className='flex flex-nowrap items-center self-stretch mt-[25px]'>
                                <p>Lupa kata sandi?</p>
                                <a className='pl-[5px] font-medium text-sky-500'>Klik disini</a>
                            </div>
                            <div className='mt-[20px] flex flex-row items-center gap-3'>
                                <button className='flex flex-1 h-[2px] rounded bg-slate-300'></button>
                                <p className='w-auto text-slate-300'>atau masuk dengan</p>
                                <button className='flex flex-1 h-[2px] rounded bg-slate-300'></button>
                            </div>
                            <div>
                                <button className='w-full h-[50px] mt-[30px] rounded bg-white  border border-gray-300'>
                                    <div className='flex flex-nowrap justify-center '>
                                        <img className='mr-[10px]' src={Googleicon} alt="" />
                                        <p className='font-medium'>Google</p>
                                    </div>
                                </button>
                            </div>
                            <div>
                                <button className='w-full h-[50px] mt-[30px] rounded bg-white  border border-gray-300'>
                                    <div className='flex flex-nowrap justify-center '>
                                        <img className='mr-[10px]' src={Facebookicon} alt="" />
                                        <p className='font-medium'>Facebook</p>
                                    </div>
                                </button>
                            </div>
                        </form>
                    </div>
                    <div>
                        <p className='ml-[30px] mt-[80px] font-medium text-slate-500'>© 2021 Travling. All Rights Reserved</p>
                    </div>
                </div>
                <div>
                    <img src={Sideright} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Login