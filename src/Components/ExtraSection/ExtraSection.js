import React from 'react';
import './ExtraSection.css';

const ExtraSection = () => {
    return (
        <div className='py-5 extra text-light'>
            <h1 className='display-3 px-5 pt-4'>Why you should choose my service?</h1>
            <div className='extra-section container w-75'>
                
                <div>
                    <h3>Professional</h3>
                    <p>Flexible content solutions to meet your unique needs.</p>
                </div>
                <div>
                    <h3>Experienced</h3>
                    <p>I have 2 years of experience of writing professionally.</p>
                </div>
                <div>
                    <h3>Quickly finish task</h3>
                    <p>Tasks are always finished very quickly here.</p>
                </div>
                <div>
                    <h3>High Quality Writing</h3>
                    <p>Every completed order on here is scored for quality.</p>
                </div>


            </div>
        </div>
    );
};

export default ExtraSection;