import React from 'react';
import {  Button } from "react-bootstrap";
import './style.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (

    <div className="footer">
        <div className='footer-container'>
            <section className='footer-subscription'>
                <p className='footer-subscription-title font-weight-bold'>
                OUR SUBSCRIBE
                </p>
                <p className='footer-subscription-heading font-weight-bold'>
                Subscribe To Get The Latest News Abouts Us
                </p>
                <p className='footer-subscription-text '>
                We recommended you to subscribe to our newspaper, drop your email below to get daily update about us
                </p>

                <div className='input-areas'>
                    <form>
                        <input
                        className='footer-input'
                        name='email'
                        type='email'
                        placeholder='Enter your email address'
                        />
                        <Button className='btn--outline rounded-pill'>Subscribe</Button>
                    </form>
                </div>
            </section>
        </div> 
          

        <div className="footer2 ">
      <div className='footer-links'>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>About</h2>
            <Link to=''>About Us</Link>
            <Link to='/'>Featues</Link>
            <Link to='/'>News</Link>
            <Link to='/'>Careers</Link>
          </div>

          <div class='footer-link-items'>
            <h2>Company</h2>
            <Link to='/'>Our Team</Link>
            <Link to='/'>Partner with Us</Link>
            <Link to='/'>FAQ</Link>
            <Link to='/'>Blog</Link>
          </div>

          <div class='footer-link-items'>
            <h2>Support</h2>
            <Link to='/'>Account</Link>
            <Link to='/'>Support Center</Link>
            <Link to='/'>Feedback</Link>
            <Link to='/'>Contact Us</Link>
          </div>

          <div class='footer-link-items'>
            <h2>Get In Touch</h2>
            <Link to='/'>Instagram</Link>
            <Link to='/'>Facebook</Link>
            <Link to='/'>Youtube</Link>
            <Link to='/'>Twitter</Link>
          </div>

        </div>
      </div>

      <section class='social-media'>
      <small class='website-rights'>Copyrights allies 2020 All rights reserved</small>
          <div class='social-icons'>
            <Link
              class='social-icon-link facebook'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              <i class='fab fa-facebook-f' />
            </Link>

            <Link
              class='social-icon-link instagram'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </Link>

            <Link
              class='social-icon-link youtube'
              to='/'
              target='_blank'
              aria-label='Youtube'
            >
              <i class='fab fa-youtube' />
            </Link>

            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              <i class='fab fa-twitter' />
            </Link>

            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i class='fab fa-linkedin' />
            </Link>

          </div>
        
      </section>
      </div>
    </div>
  );
}

export default Footer;