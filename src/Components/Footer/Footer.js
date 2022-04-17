import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div>
            <footer> 
                <div className='footer mt-5 text-light'>
               <div className='info'>
              <p>Address: Jl. Sunset Road No.815 </p> 
              <p>Email:expert23@gmail.com</p> </div> 
              <div>
                  <p>Privacy Policy</p>
                  <p>Terms and Conditions</p>
                  <p>Disclaimer</p>
                  <p>FAQ</p>
                  <p>Support</p>
              </div>
              </div>
            </footer>            
        </div>
    );
};

export default Footer;