import Link from 'next/link';
import React from 'react';

const NotFoundPage = () => {
    return (
        <div className='h-[80vh] flex flex-col space-y-5 justify-center items-center'>
            <p className='text-purple-500 text-5xl font-bold'>This page is not Found</p>
            <Link href={'/'}>
                <button className='btn btn-primary'>Back to Home</button>
            </Link>

        </div>
    );
};

export default NotFoundPage;