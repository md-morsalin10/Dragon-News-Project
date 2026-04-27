import { getNewsDetails } from '@/lib/data';
import React from 'react';

const NewsDetailsPage =async ({params}) => {
    const {id} = await params;

    const newsDe =await getNewsDetails(id)
    console.log(newsDe, "news details");
    return (
        <div>
            News details page 
        </div>
    );
};

export default NewsDetailsPage;