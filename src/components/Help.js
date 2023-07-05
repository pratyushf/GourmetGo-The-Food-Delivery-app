import React, { useState } from 'react';
import Contact from './Contact';
const Help = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [concern, setConcern] = useState('');
    const [submit, setSubmit] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault();
        // Reset form fields
        setName('');
        setEmail('');
        setConcern('');
        setSubmit(true)
    };

    return submit ? (<><h3 className="feedback">Thank You for submitting Your Feedback.</h3><Contact></Contact></>) : (
        <div className="help-container">
            <h2>Need Help?</h2>
            <p>If you have any questions or concerns, please fill out the form below and we'll get back to you as soon as possible.</p>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="concern">Concern</label>
                    <textarea
                        id="concern"
                        value={concern}
                        onChange={(e) => setConcern(e.target.value)}
                        required
                    ></textarea>
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default Help;
