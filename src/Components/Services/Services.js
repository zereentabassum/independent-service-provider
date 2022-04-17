import React from 'react';
import './Services.css';
import article from '../../images/article.webp';
import product from '../../images/product2.png';
import blog from '../../images/blog.webp';
import press from '../../images/press.webp';
import Service from '../Service/Service';

const Services = () => {
    const services = [
        {
          name:'Article Writing',
          id: 1,
          price: 50,
          img : article,
          description: 'Buy unique articles and have them written and ready to publish within hours'
        },
        {
          name:'Product Descriptions',
          id: 2,
          price: 13,
          img : product,
          description: 'Get your products descriptions written in an effective way.'
        },
        {
          name:'Blog Posts',
          id: 3,
          price: 54,
          img : blog,
          description: 'Have blog posts written within hours from here.'
        },
        {
          name:'Press Release',
          id: 4,
          price: 53,
          img : press,
          description: 'We write press releases that resonate with journalists, media outlets, news sites, and search engines. '
        }
      ]
  
    return (
        <div className='m-5 py-5 container service-div'>
            <h1 className='service-heading  text-primary py-3'>Services</h1>
            <div className='services ms-5'>
            {
             services.map(service=> <Service key={service.id} service={service}></Service>)
            }
            </div>
          
        </div>
    );
};

export default Services;