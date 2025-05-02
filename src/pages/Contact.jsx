import React from 'react';
import Homebar from './Homebar';
import Footer from './Footer';

const Contact = () => {
  return (
    <div className="bg-slate-900 min-h-screen">
      <Homebar />
      <div className="container mx-auto py-12 px-6">
        <h1 className="text-4xl font-bold text-violet-300 mb-8">Contact Us</h1>
          <div className="text-lg text-gray-300">
            <p className="mb-6">
              As the founder of FlavorDash, a leading platform for food delivery services, I understand the importance of providing excellent customer support and assistance. Our team is dedicated to ensuring that every customer has a seamless experience while using our app.
            </p>
            <p className="mb-6">
              My name is Gaurav Negi, and I am passionate about revolutionizing the food delivery industry through innovative technology and exceptional service. Whether you have questions about our app's features, need assistance with an order, or want to explore partnership opportunities, I'm here to help.
            </p>
            <p className="mb-6">
              You can reach me directly at 9873430242 or via email at negigaurav419@gmail.com. Feel free to contact me for any inquiries, feedback, or collaboration opportunities. Let's work together to create the future of food delivery!
            </p>
            <p>
              Did you know that the global food delivery market is projected to reach billions of dollars in the coming years? With the rise of on-demand delivery apps, consumers have more choices than ever when it comes to ordering food online. From fast food to gourmet cuisine, there's something for everyone in the world of food delivery.
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

export default Contact;
