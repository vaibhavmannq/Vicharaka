import React from "react";

const Banner = () => {
  return (
    <div className="bg-primary-500 text-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col items-center justify-center gap-4">
          <h1 className="text-4xl font-bold text-center">
            Vicharaka - The Book Repository
          </h1>
          <p className="text-lg text-center">
            Your Digital Gateway to Unlimited Reading.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;