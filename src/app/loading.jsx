import React from 'react';

const loading = () => {
    return (
        <div className='h-[80vh] flex justify-center items-center text-purple-600'>
            <span className="loading loading-infinity loading-xl"></span>
        </div>
    );
};

export default loading;