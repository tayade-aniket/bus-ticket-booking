import React from "react";

// images
import Bus from "../../assets/bus9.png";
import { FaStar } from "react-icons/fa";
import { FaStarHalfStroke } from "react-icons/fa6";
import { Link } from "react-router-dom";

// pages
import Destination from "../../components/destination/Destination";
import DepartTime from "../../components/departtime/DepartTime";
import Seat from "../../components/seat/Seat";

const Details = () => {
  return (
    <div className="w-full px-4 mt-20 mb-20 sm:px-7 md:px-16 lg:px-28">
      <div className="w-full grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-16">
        {/* Image and Description Section */}
        <div className="space-y-8">
          <img
            src={Bus}
            alt="detail-img"
            className="w-full aspect-[3/2] rounded-md object-contain"
          />
          <div className="space-y-4">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-neutral-900 dark:text-neutral-50">
              Luxury Bus
              <span className="text-sm sm:text-base font-normal text-neutral-400 dark:text-neutral-500 ml-3">
                (Bus Number: 1234)
              </span>
            </h1>

            <div className="flex items-center gap-x-2 text-sm">
              <div className="flex items-center gap-x-1 text-yellow-500 dark:text-yellow-600">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStarHalfStroke />
              </div>

              <p className="text-neutral-900 dark:text-neutral-200 font-normal">
                (4.5)
              </p>
            </div>
            <p className="text-neutral-900 dark:text-neutral-200 text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
              vero perferendis temporibus totam nam quasi aliquid incidunt at,
              qui nulla numquam molestias similique accusantium ex id fugit,
              exercitationem nemo consequuntur?
            </p>
          </div>
        </div>

        {/* Cards and Checkout Section */}
        <div className="space-y-10">
          <div className="space-y-6">
            {/* Destination Card */}
            <Destination />

            {/* Departure Card */}
            <DepartTime />

            {/* Seat Card */}
            <Seat />
          </div>

          {/* Checkout Button */}
          <div className="flex justify-center md:justify-start">
            <Link to={"/bus/bus-details/checkout"} className="w-full md:w-auto bg-red-600 text-neutral-50 font-medium text-base px-6 py-2 rounded-md hover:bg-red-700 transition ease-in-out duration-300 text-center">
              Proceed to Checkout
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;