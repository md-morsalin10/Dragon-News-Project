import React from 'react';

const HomePage = () => {
  return (
    <div className='grid grid-cols-12 container mx-auto gap-4'>
      <div className='bg-red-200 col-span-3'>
        right side 
      </div>
      <div className='bg-green-200 col-span-6'>
        middle side
      </div>
      <div className='bg-yellow-200 col-span-3'>
        left side
      </div>
    </div>
  );
};

export default HomePage;