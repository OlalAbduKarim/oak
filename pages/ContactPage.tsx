
import React from 'react';

const ContactPage: React.FC = () => {
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
              <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
                  <input type="text" name="name" id="name" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-accent-gold focus:border-accent-gold" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
                  <input type="email" name="email" id="email" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-accent-gold focus:border-accent-gold" />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700">Subject</label>
                  <input type="text" name="subject" id="subject" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-accent-gold focus:border-accent-gold" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                  <textarea name="message" id="message" rows={5} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-accent-gold focus:border-accent-gold"></textarea>
                </div>
                <div>
                  <button type="submit" className="w-full inline-flex justify-center py-3 px-4 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-accent-gold hover:bg-amber-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500">
                    Submit
                  </button>
                </div>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-bold text-oak-brown">General Inquiries</h3>
                <a href="mailto:info@oakindustries.com" className="text-lg text-accent-teal hover:underline">info@oakindustries.com</a>
              </div>
              <div>
                <h3 className="text-xl font-bold text-oak-brown">Investor Relations</h3>
                <a href="mailto:invest@oakindustries.com" className="text-lg text-accent-teal hover:underline">invest@oakindustries.com</a>
              </div>
              <div>
                <h3 className="text-xl font-bold text-oak-brown">Careers</h3>
                <a href="mailto:careers@oakindustries.com" className="text-lg text-accent-teal hover:underline">careers@oakindustries.com</a>
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
