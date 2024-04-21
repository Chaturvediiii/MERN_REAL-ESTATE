import React from "react";

const About = () => {
  return (
    <div className="max-w-6xl mx-auto p-3 flex flex-col gap-8 py-7">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-left my-3 text-2xl">
          <h2 className="font-semibold text-slate-600">
            About Us
          </h2>
          <p className="mt-4 text-lg leading-6 text-gray-500">
            Welcome to our real estate platform.
          </p>
        </div>
        <div className="mt-10 text-gray-500">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="md:w-1/2 md:mr-4 mb-8 md:mb-0">
              <h3 className="font-bold mb-4">Our Vision</h3>
              <p className="text-lg leading-relaxed">
                we envision a world where finding your
                dream home is simple and hassle-free. Our vision is to create
                an innovative platform that connects buyers, sellers, and
                renters seamlessly, providing the best possible experience for
                everyone involved.
              </p>
            </div>
            <div className="md:w-1/2 md:ml-4">
              <h3 className="font-bold mb-4">Our Mission</h3>
              <p className="text-lg leading-relaxed">
                Our mission is to empower individuals and families in their
                journey to find the perfect place to call home. We are
                committed to leveraging cutting-edge technology, expert
                guidance, and unparalleled customer service to simplify the
                real estate process and exceed the expectations of our clients
                and partners.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-10 text-left text-gray-500">
          <h3 className="font-bold mb-4">Meet Our Team</h3>
          <div className="flex flex-wrap">
            <div className="w-32 h-32 bg-gray-300 rounded-full overflow-hidden flex-shrink-0 mx-4 mb-4">
              <img
                src="https://images.pexels.com/photos/1642228/pexels-photo-1642228.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Team Member 1"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-32 h-32 bg-gray-300 rounded-full overflow-hidden flex-shrink-0 mx-4 mb-4">
              <img
                src="https://images.pexels.com/photos/1553783/pexels-photo-1553783.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Team Member 2"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-32 h-32 bg-gray-300 rounded-full overflow-hidden flex-shrink-0 mx-4 mb-4">
              <img
                src="https://images.pexels.com/photos/1755385/pexels-photo-1755385.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Team Member 3"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;


