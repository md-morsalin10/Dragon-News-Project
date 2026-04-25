import { Span } from 'next/dist/trace';
import React from 'react';
import Marquee from 'react-fast-marquee';


const news = [
  {
    _id: "1",
    title: "Breaking News: Major Event Unfolds in the City",
  },
  {
    _id: "2",
    title: "Breaking News: New Policy Announced by the Government",
  },
  {
    _id: "3",
    title: "Breaking News: Sports Team Wins Championship",
  },
];

const BreakingNews = () => {
    
    return (
        <div className='container mx-auto flex justify-center items-center gap-4 p-4 bg-gray-300 mt-5'>
            <button className='btn bg-purple-500'>Latest News</button>
            <Marquee pauseOnHover={true}>
               {
                news.map((n,ind)=> 
                <span key={n._id}> {n.title}</span>)
               }
            </Marquee>
        </div>
    );
};

export default BreakingNews;