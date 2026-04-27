import RightSidebar from '@/components/HomePage/News/RightSidebar';
import { getNewsDetails } from '@/lib/data';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { BiArrowFromLeft } from 'react-icons/bi';
import { FaArrowLeft } from 'react-icons/fa';

 export const generateMetadata =async ({params})=>{
        const {id} =await params;
        // console.log(id, "from news details");
        
        const news =await getNewsDetails(id);
        // console.log(news);

        return{
            title:news.title,
            description: news.description
        }
        
    }


const NewsDetailsPage = async ({ params }) => {
    const { id } = await params;

   
    const newsDe = await getNewsDetails(id)
    // console.log(newsDe, "news details");
    return (
        <div className='container mx-auto p-8 grid gap-5 grid-cols-12'>

            <div className='col-span-9 shadow-sm p-5 border border-gray-200 rounded-2xl space-y-3.5'>
                <div>
                    <h1 className='text-xl font-semibold text-gray-600 pb-4'>Dragon News</h1>
                    <Image
                        className='w-full'
                        src={newsDe.image_url}
                        width={400} height={400}
                        alt='image'></Image>
                </div>
                <div className='pb-4'>
                    <h2 className='text-xl font-bold text-gray-700 py-2.5'>{newsDe.title}</h2>
                    <p className='text-gray-500 font-medium text-sm'>{newsDe.details}</p>
                </div>
                <div>
                    <Link href={`/category/${newsDe.category_id}`}>
                    <button className='btn bg-pink-700 text-white'> 
                        <FaArrowLeft />
                        All news in this category</button>
                    </Link>
                </div>
            </div>
            <div className='col-span-3'>
                <RightSidebar />
            </div>
        </div>
    );
};

export default NewsDetailsPage;