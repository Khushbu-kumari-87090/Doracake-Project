import React, { useState } from 'react';
import './NewsletterSignup.css';

const NewsletterSignup = () => {
    const [email, setEmail] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`Thank you for subscribing with ${email}`);
        // Here you can add code to send `email` to your server.
        setEmail(''); // Clear the input field after submission
    };

    return (
        <div className="newsletter-section">
            <h1>Join our Newsletter</h1>
            <p>Get the freshest Magnolia Bakery updates and offers right to your inbox!<br />
            Plus, enjoy 10% off on your birthday when you share the date with us!</p>
            <form onSubmit={handleSubmit}>
                <input 
                    type="email" 
                    placeholder="ENTER YOUR EMAIL ADDRESS" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                    required 
                />
                <button type="submit">→</button>
            </form>
        </div>
    );
};

export default NewsletterSignup;
