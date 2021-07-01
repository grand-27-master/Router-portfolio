import React from 'react';
import './Contact.css';

const Contact=()=>{
    return(
        <div className='header-text'>
            <h1>Reach out to me.</h1>
            <p className='bio'>Have any queries? Feel free to drop me an email!</p>

            {/* form section */}
            <div className='form-container'>
                <form className='form' action="https://formspree.io/f/mvodqbea" method="POST">
                    <input type='email'
                        placeholder='Your Email ID'
                        name='_replyto'
                        className='input-box email-input'></input>

                        <textarea type='text'
                        placeholder='Your Message'
                        name='message'
                        className='input-box body-input'></textarea>

                        <button type='submit' className='contact-btn'>Send</button>
                </form>
            </div>
        </div>
    )
}

export default Contact;