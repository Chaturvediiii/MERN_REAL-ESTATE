import React from "react";

const About = () => {
  return (
    <section className="max-w-6xl mx-auto p-3 flex flex-col gap-8 py-7 mt-4">
      <div className="container">
        <div className=" text-left">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">
            Welcome to{" "}
            <span>
              <span className="text-slate-500">Real</span>
              <span className="text-slate-700">Estate</span>
            </span>
          </h2>
          <p className="text-lg text-gray-600">
            At
            <span>
              <span className="text-slate-500"> Real</span>
              <span className="text-slate-700">Estate</span>
            </span>
            , we believe in more than just buying and selling properties. We're
            dedicated to creating meaningful connections and transforming dreams
            into reality.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
