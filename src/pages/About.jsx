

import React from 'react';
import Homebar from './Homebar';
import Footer from './Footer';

const About = () => {
  return (
    <div className="bg-slate-900 min-h-screen">
      <Homebar />
      <div className="container mx-auto py-12 px-6">
        <h1 className="text-4xl font-bold text-violet-300 mb-8">About</h1>
          <div className="text-lg text-gray-300">
            <p className="mb-6">
            FlavorDash is a revolutionary app designed to simplify the process of finding and ordering your favorite foods from various cuisines. With a user-friendly interface and robust features, FlavorDash aims to make food ordering a delightful experience for its users.
            </p>
            <p className="mb-6">
            Our platform brings together a diverse range of restaurants, offering a plethora of dishes to satisfy every craving. Whether you're in the mood for traditional comfort food or exploring new culinary delights, FlavorDash has something for everyone.
            </p>
            <p className="mb-6">
            We understand the importance of convenience and efficiency when it comes to food delivery. That's why we've implemented advanced features like real-time order tracking, secure payment options, and personalized recommendations to enhance your dining experience.
            </p>
            <p>
            Join the FlavorDash community today and discover a world of flavors at your fingertips. Download our app and embark on a culinary journey like never before!
            </p>
          </div>
          {/* Add a contact form here if needed */}
        
      </div>
      <br />
      <br />
      <br />
      <br />
      <Footer />
    </div>
  );
};

export default About;

