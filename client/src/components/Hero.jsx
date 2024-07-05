import React from 'react';

const HeroSection = () => {
  return (
    <div className="relative min-h-screen">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url('https://images.pexels.com/photos/358636/pexels-photo-358636.jpeg?auto=compress&cs=tinysrgb&w=600')` }}
      ></div>
      <div className="absolute bottom-20 right-20 bg-black bg-opacity-80 text-white p-4 text-center">
        <p className='uppercase text-4xl'>10 nelsons walk gulf</p>
        <p style={{fontFamily:'cursive'}}>Your next home at premium location at just $1200 with some additional discounts</p>
      </div>
    </div>
  );
};

export default HeroSection;
