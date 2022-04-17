import React from 'react';

const NotFound = () => {
    return (
        <div>
            <h1 className=' pt-5 pb-2 display-1'>404</h1>
            <h2 className='text-danger'>The page you are looking for is not available</h2>
            <img className='w-25' src="https://internetdevels.com/sites/default/files/public/blog_preview/404_page_cover.jpg" alt="" />
        </div>
    );
};

export default NotFound;