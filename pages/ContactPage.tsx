import React, { useState } from 'react';
import { MailIcon, PhoneIcon, LocationMarkerIcon } from '../constants';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [formStatus, setFormStatus] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('Redirecting to your email client...');

    const { name, email, subject, message } = formData;
    const recipient = 'olalabdukarim@gmail.com';
    const mailtoLink = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    )}`;

    window.location.href = mailtoLink;

    setTimeout(() => {
      setFormStatus('Your email client has been opened to send the message.');
    }, 1000);
    
    setTimeout(() => {
        setFormData({ name: '', email: '', subject: '', message: '' });
        setFormStatus('');
    }, 5000);
  };

  return (
    <div className="bg-white">
      <section className="py-20 text-center bg-stone-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-extrabold text-oak-brown">Get in Touch</h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg md:text-xl text-gray-600">
            We’d love to hear from you. Whether you have a question about our products, partnerships, or anything else, our team is ready to answer all your questions.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
            {/* Contact Form */}
            <div className="bg-stone-50 p-8 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold text-oak-brown mb-6">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
                  <input type="text" name="name" id="name" value={formData.name} onChange={handleChange} required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-accent-gold focus:border-accent-gold" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
                  <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-accent-gold focus:border-accent-gold" />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700">Subject</label>
                  <input type="text" name="subject" id="subject" value={formData.subject} onChange={handleChange} required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-accent-gold focus:border-accent-gold" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                  <textarea name="message" id="message" rows={5} value={formData.message} onChange={handleChange} required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-accent-gold focus:border-accent-gold"></textarea>
                </div>
                <div>
                  <button type="submit" className="w-full inline-flex justify-center py-3 px-4 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-accent-gold hover:bg-amber-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500">
                    Send Message
                  </button>
                </div>
                {formStatus && <p className="text-center text-sm text-gray-600 mt-4">{formStatus}</p>}
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-10 flex flex-col justify-center">
              <h2 className="text-3xl font-bold text-oak-brown -mb-2">Contact Information</h2>

              <div className="flex items-start">
                  <LocationMarkerIcon className="w-8 h-8 text-accent-gold mr-4 flex-shrink-0 mt-1"/>
                  <div>
                      <h3 className="text-xl font-bold text-oak-brown">Our Office</h3>
                      <a href="https://www.google.com/maps/search/?api=1&query=Kampala,Uganda" target="_blank" rel="noopener noreferrer" className="text-lg text-accent-teal hover:underline">
                        Kampala, Uganda
                      </a>
                  </div>
              </div>
              
              <div className="flex items-start">
                  <PhoneIcon className="w-8 h-8 text-accent-gold mr-4 flex-shrink-0 mt-1"/>
                  <div>
                      <h3 className="text-xl font-bold text-oak-brown">Phone</h3>
                      <a href="tel:+256764384080" className="block text-lg text-accent-teal hover:underline">+256 764 384 080</a>
                      <a href="tel:+256759705328" className="block text-lg text-accent-teal hover:underline">+256 759 705 328</a>
                  </div>
              </div>

              <div className="flex items-start">
                  <MailIcon className="w-8 h-8 text-accent-gold mr-4 flex-shrink-0 mt-1"/>
                  <div>
                      <h3 className="text-xl font-bold text-oak-brown">Email</h3>
                      <p className="text-gray-600 mb-1">For all inquiries (general, investors, careers):</p>
                      <a href="mailto:olalabdukarim@gmail.com" className="text-lg text-accent-teal hover:underline">olalabdukarim@gmail.com</a>
                  </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-oak-brown">Follow Us</h3>
                 <div className="flex space-x-4 mt-2">
                    <a href="#" className="text-gray-500 hover:text-oak-brown">LinkedIn</a>
                    <a href="#" className="text-gray-500 hover:text-oak-brown">Twitter</a>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;