

const ContactPage = () => (
    <>
        <main className="contact-page">
            <section className="contact">
                <h2>Contact Us</h2>
                <p>We would love to hear from you! Please reach out using the form below or contact us directly.</p>
                <form className="contact-form">
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" required />

                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" required />

                    <label htmlFor="message">Message:</label>
                    <textarea id="message" name="message" rows={5} required></textarea>

                    <button type="submit" className="btn primary">Send Message</button>
                </form>
            </section>
        </main>
    </>
);

export default ContactPage;