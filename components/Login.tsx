import React from "react";
import { BsGoogle } from "react-icons/bs";
import {VscUnlock} from "react-icons/vsc";
import {MdAlternateEmail} from "react-icons/md";

const Login: React.FC = () => {
    return (
        <section className="bg-white min-h-screen flex items-center justify-center">
            {/* login container */}

            <div className="bg-white flex rounded-2xl shadow-lg max-w-4xl p-5 items-center">


                <div className="md:block hidden w-1/2 bg-slate-50">
                    <div className=" px-10 mt-8">
                        <h2 className="font-bold text-2xl text-blue-600">Zoho.</h2>
                        <p className="text-xs mt-4 text-black">A central hub where teams can work,plan and achive amazing things together.</p>
                    </div>
                    <img className="rounded-2xl" src="img.png" />
                </div>
                {/* form */}
                <div className="md:w-1/2 px-8 md:px-16">
                    <p className="text-xs mt-4 text-black uppercase">Start For Free</p>
                    <h2 className="font-bold text-2xl text-black">Sign Up to Zoho</h2>
                    <p className="text-xs mt-4 text-black">Already a member ? <span className=" text-blue-600">Log-In</span></p><br/>

                    <form action="" className="flex flex-col gap-4">
                  
                    <div className="relative">
                    <h2 className="font-semibold text-sm text-black">E-mail</h2>
                            <input className="p-2 rounded-xl border w-full" type="password" name="password" placeholder="name@mail.com" />
                            <span className="absolute inset-y-0 right-4 flex items-center pl-2 mt-5">
                            <MdAlternateEmail/>
                            </span>
                        </div>
                        
                        <div className="relative">
                        <h2 className="font-semibold text-sm text-black">Password</h2>
                            <input className="p-2 rounded-xl border w-full" type="password" name="password" placeholder="6+ Characters, 1 Capital letter" />
                            <span className="absolute inset-y-0 right-4 flex items-center pl-2 mt-5">
                            <VscUnlock/>
                            </span>
                        </div>
                        <button className=" bg-blue-600 rounded-xl text-white py-2 hover:scale-105 duration-300">Create an account</button>
                    </form>

                    <div className="mt-6 grid grid-cols-3 items-center text-gray-400">
                        <hr className="border-gray-400" />
                        <p className="text-center text-sm">OR</p>
                        <hr className="border-gray-400" />
                    </div>

                    <button className="bg-white border py-2 w-full rounded-xl mt-5 flex justify-center items-center text-sm hover:scale-105 duration-300 text-blue-900">
                        <BsGoogle className=" mr-2" />

                        Sign Up with Google
                    </button>

                   
                    <div className="mt-16 text-xs flex justify-between items-center text-blue-900">
                        <p>This site is protected by reCAPTCHA and the google<span className="text-blue-600"> privacy policy </span> and <span className="text-blue-600">terms of service</span> apply</p>
                        
                    </div>
                </div>


            </div>
        </section>
    );
};

export default Login;
