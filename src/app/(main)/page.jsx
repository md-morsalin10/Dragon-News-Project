import LeftSide from '@/components/HomePage/News/LeftSide';
import React from 'react';

const getCategory = async () => {
  const res = await fetch('https://openapi.programming-hero.com/api/news/categories')
  const data = await res.json()
  return data.data
}

const HomePage = async () => {
  const categoriesRes = await getCategory()
  const category = categoriesRes.news_category
  console.log(category);

  return (
    <div className='grid grid-cols-12 container mx-auto gap-4'>
      <div className='col-span-3'>
       <LeftSide category={category} activeId={'04'}></LeftSide>
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