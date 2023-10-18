import React from 'react';

function NewsletterSection() {
    return (
        <section className="newsletter-section">
            <h3>Research Roundup</h3>
            <p>Subscribe to Cyber Markets's weekly newsletter.</p>
            <input type="email" placeholder="Type your email..." />
            <button>Subscribe</button>
        </section>
    );
}

export default NewsletterSection;