import React from 'react';

const Newsletter = () => {
    return (
        <div>
            <section className="newsletter py-20 bg-gray-400 text-white dark:bg-black">
                <div className="max-w-6xl mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-6 text-red-600">Stay Updated</h2>
                    <p className="text-lg mb-8">Sign up for our newsletter and never miss out on the latest movie releases, news, and exclusive offers!</p>
                    
                        <input 
                            type="email"
                            placeholder="Enter your email"
                            className="px-6 py-3 text-gray-800 rounded-l-lg  border  focus:outline-none placeholder:text-white placeholder:opacity-50"
                        />
                        <button type="submit" className="bg-white text-red-600 px-6 py-3 rounded-r-lg hover:bg-gray-200" disabled>
                            Subscribe
                        </button>
                    
                </div>
            </section>
        </div>
    );
};

export default Newsletter;