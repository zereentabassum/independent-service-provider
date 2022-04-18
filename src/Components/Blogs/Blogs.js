import React from 'react';
import './Blogs.css';

const Blogs = () => {
    return (
        <div className='text-start container flex-wrap w-75'>
            <h1 className='pt-2 pb-4 text-center'>Blogs</h1>

            <div className='blogs  border border-primary p-2'>
            <h3><strong>Question-1: </strong> What is the difference between Authorization and Authentication ?</h3>
            <p><strong>Answer: </strong>  Authentication is a process which verifies who the user is. Authorization is a process to determine which resources user can access. Authentication is visible and can be partially changable by user. Authorization is not visible and is not changable by user.</p>
            <h3><strong>Question-2: </strong> Why are you using firebase? What other options do you have to implement authentication?</h3>
            <p><strong>Answer: </strong>  I am using firebase because it is fast and safe for hosting and authentication. It is easy and free to use. The other options to implement authentication are Auth0, MongoDB, Passport, Okta etc.</p>
            <h3><strong>Question-3: </strong>  What other services does firebase provide other than authentication ?</h3>
            <p><strong>Answer: </strong> Firebase provides many services other than authentication. These are - Cloud Firestore, Cloud Functions ,Authentication, Hosting, Cloud Storage, Google Analytics, Predictions, Cloud Messaging etc. </p>
            </div>
        </div>
    );
};

export default Blogs;