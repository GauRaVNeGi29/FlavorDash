import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <p className="text-center md:text-left mb-2 md:mb-0">© 2024 FlavorDash. All rights reserved.</p>
          <div className="flex mt-4 md:mt-0">
            <a href="/about" className="mr-4 hover:text-blue-500">About</a>
            <a href="/contact" className="mr-4 hover:text-blue-500">Contact</a>
          </div>
          <div className="flex items-center space-x-4">
          <a href="https://www.linkedin.com/in/gaurav-negi-b81a79230/">
            <img src="/linkedin.png" alt="LinkedIn" className="w-6 h-6 " />
          </a>
          <a href="https://www.instagram.com/gaurav._.negi/">
            <img src="/instagram.png" alt="Instagram" className="w-6 h-6 " />
          </a>
          <a href="https://www.twitter.com/Gauravn3gi">
            <img src="/twitter.png" alt="Twitter" className="w-6 h-6 " />
          </a>
          <a href="https://www.facebook.com/gaurav.negi.7121614/">
            <img src="/facebook.png" alt="Facebook" className="w-6 h-6 " />
          </a>
          <a href="https://github.com/GauRaVNeGi29">
            <img src="/github.png" alt="github" className="w-7 h-7" />
          </a>
        </div>
        </div>
      </div>
    </footer>
  );
};


