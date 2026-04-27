import Image from 'next/image';
import React from 'react';
import { CiShare2 } from 'react-icons/ci';
import { FaBookmark } from 'react-icons/fa';

const NewsCard = ({ n }) => {
    return (
        <div>
            <div className="card bg-base-100 p-4 shadow-2xl my-5">
                <div className="flex justify-between items-center bg-base-300 p-4">
                    <div className='flex justify-center items-center  gap-1'>
                        <div>
                            <Image
                                className='rounded-full'
                                src={n.author.img}
                                width={40} height={40}
                                alt='author' ></Image>
                        </div>
                        <div>
                            <p className='text-xs font-bold'>{n.author.name}</p>
                            <p className='text-xs font-normal text-gray-400'>{n.author.published_date}</p>
                        </div>
                    </div>
                    <div className='text-gray-600 flex gap-3'>
                        <FaBookmark />
                        <CiShare2 />
                    </div>

                </div>
                <div>
                    <h2 className="text-xl font-bold text-gray-700 py-3">{n.title}</h2>
                </div>
                <figure>
                    <Image
                        src={n.image_url}
                        width={600}
                        height={600}
                        alt="News" />
                </figure>
                <div>
                    <p className='text-sm text-gray-600'>{n.details}</p>
                </div>
            </div>
        </div>
    );
};

export default NewsCard;