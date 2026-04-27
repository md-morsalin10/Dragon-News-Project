"use client"
import Link from 'next/link';
import React from 'react';
import { useForm } from 'react-hook-form';

const LoginPage = () => {
    const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
//   console.log(errors);
  

  const onSubmit =(data)=>{
    console.log(data);
    
  }

    return (
        <div className='flex justify-center items-center h-[80vh] container mx-auto '>

            <div className='w-100 mb-12 shadow-2xl bg-base-300 border border-gray-200 rounded-xl p-5'>
                <h2 className='text-2xl font-bold text-slate-900 text-center'>Login your account</h2>
                <form onSubmit={handleSubmit(onSubmit)} className='space-y-2.5 pt-10'>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Email</legend>
                        <input 
                        {...register("email", 
                            { required: "Email Filed is Required" })}
                        type="email"
                        className="input w-full" 
                        placeholder="Enter Your Email" />
                        {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
                    </fieldset>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Password</legend>
                        <input 
                        {...register("password", 
                            { required: "Password Filed is Required" })}
                        type="password" 
                        className="input w-full" 
                        placeholder="Enter Your Password" />
                        {errors.password && <p className='text-red-500'>{errors.password.message}</p>}
                    </fieldset>
                    <button className='btn w-full bg-slate-900 my-4 text-white'>Login</button>
                </form>
                <div>
                    <p className='text-sm text-center font-semibold text-gray-500'>Do not Have an Account  <Link className='text-red-500 font-bold' href={'/register'}>Register</Link></p>
                </div>
            </div>

        </div>
    );
};

export default LoginPage;