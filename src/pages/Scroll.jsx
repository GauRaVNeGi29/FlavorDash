// import React, { useState } from 'react';

// const images = [
//   'image1.jpg',
//   'image2.jpg',
//   'image3.jpg',
//   'image4.jpg',
//   'image5.jpg',
// ];



// const Scroll = () => {
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);

//   const nextImage = () => {
//     setCurrentImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
//   };

//   const prevImage = () => {
//     setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
//   };

//   return (
//     <div className="flex items-center justify-center mt-0 ">
//       <button onClick={prevImage} className=" text-5xl absolute left-20 transform -translate-y-1/2 bg-slate-700 flex items-center justify-center hover:bg-grey p-2 h-full focus:outline-none text-white">
//         &larr;
//       </button>
//       <img src={images[currentImageIndex]} alt="carousel" className="mx-auto max-w-full" />
//       <button onClick={nextImage} className=" text-5xl absolute right-20 transform -translate-y-1/2 bg-slate-700 flex items-center justify-center hover:bg-grey p-2 h-full focus:outline-none text-white">
//         &rarr;
//       </button>
//     </div>
//   );
// };

// export default Scroll;

import React, { useState}from 'react';

const images = [
  'image1.jpg',
  'image2.jpg',
  'image3.jpg',
  'image4.jpg',
  'image5.jpg',
  
];

const Scroll = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  return (
    <div className="flex items-center justify-center mt-0 relative">
      <button
        onClick={prevImage}
        className={`text-5xl absolute left-0 top-1/2 transform -translate-y-1/2 flex items-center place-content-center justify-center px-8 h-full focus:outline-none`}
      >
      <img src="prev.png" alt="prev" />
      </button>
      <img src={images[currentImageIndex]} alt="carousel" className="mx-auto max-w-full" />
      <button
        onClick={nextImage}
        className={`text-5xl absolute right-0 top-1/2 transform -translate-y-1/2 flex items-center place-content-center justify-center px-12 h-full focus:outline-none`}
      >
       <img src="next.png" alt="next" />
      </button>
    </div>
  );
};

export default Scroll;
