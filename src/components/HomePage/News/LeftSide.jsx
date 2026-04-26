import Link from 'next/link';
import React from 'react';

const LeftSide = ({category, activeId}) => {
    return (
        <div>
            <h2 className='font-semibold text-xl text-gray-500'>All Category</h2>
            <ul className=' flex flex-col mt-4 gap-3'>
                {
                    category.map(cat => <li
                        className={` ${ activeId === cat.category_id && "bg-slate-300"} text-center`}
                        key={cat.category_id}>
                            <Link href={`/category/${cat.category_id}`} className=' block  p-2'>{cat.category_name}</Link>
                            </li>)
                }
            </ul>
        </div>
    );
};

export default LeftSide;