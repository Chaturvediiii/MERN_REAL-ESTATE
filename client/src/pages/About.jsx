import React from "react";

const About = () => {
  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <section className="text-center py-20 bg-gray-100">
        <h1 className="text-4xl font-bold">We are Your Real Estate Experts</h1>
        <p className="mt-4 text-lg">
          Delivering top-notch real estate services with a client-centric
          approach.
        </p>
        <button className="mt-6 px-6 py-3 bg-slate-700 text-white rounded-md hover:bg-slate-600">
          Enquire
        </button>
      </section>

      {/* Stats Section */}
      <section className="container mx-auto py-16 grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
        <div>
          <h2 className="text-4xl font-bold">3000+</h2>
          <p>Properties Sold</p>
        </div>
        <div>
          <h2 className="text-4xl font-bold">200</h2>
          <p>Agents</p>
        </div>
        <div>
          <h2 className="text-4xl font-bold">5</h2>
          <p>Offices</p>
        </div>
        <div>
          <h2 className="text-4xl font-bold">1500+</h2>
          <p>Happy Clients</p>
        </div>
      </section>

      {/* About Section */}
      <section className="container mx-auto py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <img
              src="/src/assets/about.jpg"
              alt="About us"
              className="w-full rounded-lg shadow-lg"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold">Why Choose Us?</h2>
            <p className="mt-4">
              With years of experience in the real estate market, we provide
              personalized and professional services to help you find your dream
              home or investment property.
            </p>
            <button className="mt-6 px-6 py-3 bg-slate-700 text-white rounded-md hover:bg-slate-600">
              Meet Our Team
            </button>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold">Our Process</h2>
          <p className="mt-4 mb-12">
            We guide you through every step of the buying and selling process.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="p-6 bg-white shadow-lg rounded-lg">
              <h3 className="text-xl font-bold">Consultation</h3>
              <p className="mt-2">Understanding your needs and preferences.</p>
            </div>
            <div className="p-6 bg-white shadow-lg rounded-lg">
              <h3 className="text-xl font-bold">Property Search</h3>
              <p className="mt-2">
                Finding the right properties that match your criteria.
              </p>
            </div>
            <div className="p-6 bg-white shadow-lg rounded-lg">
              <h3 className="text-xl font-bold">Negotiation</h3>
              <p className="mt-2">Ensuring you get the best deal possible.</p>
            </div>
            <div className="p-6 bg-white shadow-lg rounded-lg">
              <h3 className="text-xl font-bold">Closing</h3>
              <p className="mt-2">
                Finalizing the deal and handing over the keys.
              </p>
            </div>
          </div>
          <button className="mt-12 px-6 py-3 bg-slate-700 text-white rounded-md hover:bg-slate-600">
            Learn More
          </button>
        </div>
      </section>
    </div>
  );
};

export default About;
