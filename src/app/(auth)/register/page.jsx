"use client"
import { authClient } from '@/lib/auth-client';
import Link from 'next/link';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const RegisterPage = () => {
    const [showPass, setShowPass] = useState(false)
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();
    //   console.log(errors);


    const onRegister = async (data) => {
        console.log(data);

        const { name, email, password, photo } = data

        const { data: res, error } = await authClient.signUp.email({
            name: name,
            email: email,
            password: password,
            image: photo,
            callbackURL: "/",
        });
        console.log(res, error);
        if (error) {
            alert(error.message)
        }
        if (res) {
            alert("SignUp Successful")
        }

    }


    return (
        <div className='flex justify-center items-center h-[90vh] container mx-auto  '>

            <div className='w-100 mb-8 shadow-2xl bg-base-300 border border-gray-200 rounded-xl p-5'>
                <h2 className='text-2xl font-bold text-slate-900 text-center'>Register your account</h2>
                <form onSubmit={handleSubmit(onRegister)} className='space-y-2.5 pt-10'>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Your Name</legend>
                        <input
                            {...register("name",
                                { required: "Name Filed is Required" })}
                            type="text"
                            className="input w-full"
                            placeholder="Enter Your Email" />
                        {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                    </fieldset>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Photo URL</legend>
                        <input
                            {...register("photo",
                                { required: "Photo Filed is Required" })}
                            type="text"
                            className="input w-full"
                            placeholder="Enter Your Email" />
                        {errors.photo && <p className='text-red-500'>{errors.photo.message}</p>}
                    </fieldset>
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
                            type={showPass? "text":"password"}
                            className="input w-full"
                            placeholder="Enter Your Password" />
                        {errors.password && <p className='text-red-500'>{errors.password.message}</p>}
                        <span
                            onClick={() => setShowPass(!showPass)}
                            className='relative  -top-8 left-84'>{showPass? <FaEye size={15}/> : <FaEyeSlash size={15}/>}</span>
                    </fieldset>
                    <button className='btn w-full bg-slate-900 my-4 text-white'>Login</button>
                </form>

            </div>

        </div>
    );
};

export default RegisterPage;