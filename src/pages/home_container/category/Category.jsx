import React from 'react';
import { Link } from 'react-router-dom';

// images
import Bus1 from '../../../assets/bus1.png';
import Bus2 from '../../../assets/bus6.png';
import Bus3 from '../../../assets/bus9.png';

const Category = () => {
  return (
    <div className="w-full px-4 sm:px-7 md:px-16 lg:px-28 mb-[8ch]">
      <div className="w-full flex flex-col sm:flex-row items-center justify-between mb-6">
        <h1 className="text-xl sm:text-2xl font-medium">
          Category
        </h1>
        <Link to="/bus" className="text-red-600 text-sm sm:text-base">
          View All
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <Link to="/bus" className="bg-neutral-200/60 dark:bg-neutral-900/40 block rounded-xl px-4 py-5 relative group ease-in-out duration-300 overflow-hidden">
          <img src={Bus1} alt="bus-img" className="w-full h-auto object-cover" />
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-tr dark:from-neutral-950/80 dark:to-neutral-950/60 from-neutral-400/80 to-neutral-400/60 group-hover:flex hidden items-center justify-center ease-in-out duration-300">
            <h2 className="text-lg sm:text-2xl text-center font-bold text-neutral-900 dark:text-neutral-50">
              Private Bus
            </h2>
          </div>
        </Link>

        <Link to="/bus" className="bg-neutral-200/60 dark:bg-neutral-900/40 block rounded-xl px-4 py-5 relative group ease-in-out duration-300 overflow-hidden">
          <img src={Bus2} alt="bus-img" className="w-full h-auto object-cover" />
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-tr dark:from-neutral-950/80 dark:to-neutral-950/60 from-neutral-400/80 to-neutral-400/60 group-hover:flex hidden items-center justify-center ease-in-out duration-300">
            <h2 className="text-lg sm:text-2xl text-center font-bold text-neutral-900 dark:text-neutral-50">
              Tourist Bus
            </h2>
          </div>
        </Link>

        <Link to="/bus" className="bg-neutral-200/60 dark:bg-neutral-900/40 block rounded-xl px-4 py-5 relative group ease-in-out duration-300 overflow-hidden">
          <img src={Bus3} alt="bus-img" className="w-full h-auto object-cover" />
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-tr dark:from-neutral-950/80 dark:to-neutral-950/60 from-neutral-400/80 to-neutral-400/60 group-hover:flex hidden items-center justify-center ease-in-out duration-300">
            <h2 className="text-lg sm:text-2xl text-center font-bold text-neutral-900 dark:text-neutral-50">
              Government Bus
            </h2>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Category;