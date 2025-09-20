
import React from 'react';
import { Link } from 'react-router-dom';
import { BLOG_POSTS } from '../constants';
import { ArrowRightIcon } from '../constants';

const BlogPage: React.FC = () => {
  return (
    <div className="bg-white">
      <section className="py-20 text-center bg-stone-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-extrabold text-oak-brown">Blog & Newsroom</h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg md:text-xl text-gray-600">
            Insights, updates, and stories from the team at Oak Industries.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {BLOG_POSTS.map((post) => (
              <div key={post.id} className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col group">
                <img src={post.imageUrl} alt={post.title} className="w-full h-56 object-cover" />
                <div className="p-6 flex flex-col flex-grow">
                  <h2 className="text-xl font-bold text-oak-brown group-hover:text-accent-gold transition-colors">{post.title}</h2>
                  <p className="text-sm text-gray-500 mt-2">By {post.author} on {post.date}</p>
                  <p className="mt-4 text-gray-600 flex-grow">{post.excerpt}</p>
                  <Link to="#" className="mt-6 inline-flex items-center text-accent-gold font-semibold">
                    Read more <ArrowRightIcon className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;
