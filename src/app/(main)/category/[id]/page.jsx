import LeftSide from '@/components/HomePage/News/LeftSide';
import NewsCard from '@/components/HomePage/News/NewsCard';
import RightSidebar from '@/components/HomePage/News/RightSidebar';
import { getCategory, getNewsByCategory } from '@/lib/data';
import React from 'react';


const NewsByCategory = async ({params}) => {
    const {id} = await params
    const categoriesRes = await getCategory()
    const category = categoriesRes.news_category
    // console.log(category);
    console.log(id, "news category");
    

    const news = await getNewsByCategory(id)
   
    return (
        <div className='grid grid-cols-12 container mx-auto gap-4'>
            <div className='col-span-3'>
                <LeftSide category={category} activeId={id}></LeftSide>
            </div>

            <div className='col-span-6'>
                <h2 className='text-xl font-bold text-gray-600'>Dragon News home</h2>
                {news.length > 0 ?  news.map((n) => {

                        return <NewsCard key={n._id} n={n}></NewsCard>
                    }): <div className='flex justify-center items-center h-[70vh]'>
                            <p className='text-gray-500 text-3xl font-medium'>No News Found</p>
                        </div>}
            </div>
            <div className='col-span-3'>
                <RightSidebar />
            </div>
        </div>
    );
};

export default NewsByCategory;