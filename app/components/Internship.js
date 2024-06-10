import React from 'react';

const Internship = () => {
  return (
    <section className="bg-gray-100 p-4 rounded-md shadow-md mt-4">
      <h3 className="text-lg font-bold mb-2">Internship</h3>
      <div className="flex justify-between items-center">
        <p className="text-xl font-bold">80%</p>
        <p className="text-gray-500">Quick Statistics</p>
      </div>
      <div className="mt-4">
        <div className="flex items-center space-x-2">
          <span className="inline-block w-8 h-8 bg-blue-500 rounded-full text-white text-center">
            ま
          </span>
          <div>
            <p className="text-sm">1</p>
            <p className="text-xs text-gray-500">percentile</p>
          </div>
        </div>
        <div className="flex items-center space-x-2 mt-2">
          <div className="w-full h-2 bg-gray-200 rounded-full">
            <div className="w-3/4 h-2 bg-blue-500 rounded-full"></div>
          </div>
          <p className="text-xs text-gray-500">30%</p>
        </div>
      </div>
    </section>
  );
};

export default Internship;
