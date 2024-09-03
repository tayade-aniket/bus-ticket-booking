import React from "react";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

// images
import Bus1 from "../../assets/bus1.png";
import Bus2 from "../../assets/bus.png";
import Bus3 from "../../assets/bus5.png";
import Bus4 from "../../assets/bus4.png";
import Bus5 from "../../assets/bus7.png";
import Bus6 from "../../assets/bus6.png";

const Bus = () => {
  return (
    <div className="w-full px-4 mt-20 mb-20 space-y-14 sm:px-7 md:px-16 lg:px-28">
      {/* Search and Filter Section */}
      <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 bg-neutral-200/60 dark:bg-neutral-900/40 rounded-md px-4 py-5 items-center">
        <div className="flex items-center gap-x-2.5 md:col-span-2">
          <input
            type="text"
            placeholder="Search buses...."
            name="seat"
            id="seat"
            className="w-full appearance-none text-neutral-800 dark:text-neutral-100 placeholder:text-neutral-400 dark:placeholder:text-neutral-600 bg-neutral-200/60 dark:bg-neutral-900/60 px-3 h-12 border border-neutral-200 dark:border-neutral-900 rounded-md focus:outline-none focus:bg-neutral-100 dark:focus:bg-neutral-900"
          />
          <button className="bg-red-600 h-11 px-4 rounded-md text-base text-neutral-50 font-normal flex items-center justify-center">
            <FaSearch />
          </button>
        </div>
        <div className="md:col-span-1">
          <select
            className="w-full appearance-none text-neutral-800 dark:text-neutral-100 bg-neutral-200/60 dark:bg-neutral-900/60 px-3 h-12 border border-neutral-200 dark:border-neutral-900 rounded-md focus:outline-none focus:bg-neutral-100 dark:focus:bg-neutral-900"
          >
            <option value="">Select Bus Type</option>
            <option value="touristbus">Tourist Bus</option>
            <option value="privatebus">Private Bus</option>
            <option value="luxurybus">Luxury Bus</option>
            <option value="deluxbus">Delux Bus</option>
          </select>
        </div>
      </div>

      {/* Bus Cards Section */}
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {[Bus1, Bus2, Bus3, Bus4, Bus5, Bus6].map((busImage, index) => (
          <Link to="/bus/bus-details" key={index} className="w-full bg-neutral-200/60 dark:bg-neutral-900/40 rounded-xl p-4">
            <img src={busImage} alt={`bus-img-${index}`} className="w-full aspect-video object-contain object-center" />
            <div className="px-3 py-4 space-y-2">
              <div className="flex items-center justify-between">
                <h1 className="text-xl font-semibold text-neutral-800 dark:text-neutral-50">
                  {["Tourist Bus", "Delux Bus", "Luxury Bus"][index % 3]}
                </h1>
                <p className="text-sm font-semibold text-neutral-800 dark:text-neutral-50">
                  {["60 passengers", "50 passengers", "50 passengers"][index % 3]}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Bus;