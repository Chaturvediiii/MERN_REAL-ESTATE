import React from 'react';
import { Link } from 'react-router-dom';

const AboutPage = () => {
  return (
    <div className="max-w-6xl mx-auto p-3 flex flex-col gap-8 py-7">
        <div className="">
          <div className="my-3">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">
              Welcome to Real Estate
            </h2>
            <p className="text-lg text-gray-600">
              At Real Estate, we believe in more than just
              buying and selling properties. We're dedicated to creating
              meaningful connections and transforming dreams into reality.
            </p>
          </div>
        </div>
    </div>
  );
};

export default AboutPage;

