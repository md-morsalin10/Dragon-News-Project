"use client"
import { authClient } from '@/lib/auth-client';
import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from 'react-icons/fa';

const RightSidebar = () => {
    const handleGoogleSignIn = async () => {
        const data = await authClient.signIn.social({
            provider: "google"
        });

        console.log(data, "data")
    }

    const handleGithubSigIn = async () => {
        const data = await authClient.signIn.social({
            provider: "github"
        })

        console.log(data, "data")
    }

    return (
        <div>
            <div className='flex flex-col justify-center gap-2'>
                <h2 className='text-xl font-semibold text-gray-600'>Login With</h2>
                <button
                    onClick={handleGoogleSignIn}
                    className='btn border border-blue-500 text-blue-500'>
                    <FaGoogle />
                    Login With Google</button>
                <button
                    onClick={handleGithubSigIn}
                    className='btn border border-gray-600 text-gray-600'>
                    <FaGithub />
                    Login With Github</button>
            </div>
            <div className='flex flex-col gap-2 py-4'>
                <h2 className='text-xl font-semibold text-gray-600'>Find on Us</h2>
                <button className='btn'><FaFacebook />Facebook</button>
                <button className='btn'><FaTwitter />Twitter</button>
                <button className='btn'><FaInstagram />Instagram</button>
            </div>
        </div>
    );
};

export default RightSidebar;