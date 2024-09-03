import React from "react";

const Search = () => {
  return (
    <div className="w-full px-4 my-[8ch] sm:px-7 md:px-16 lg:px-28">
      <div className="w-full bg-neutral-100 rounded-md dark:bg-neutral-900/40 p-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 items-end">
          <div>
            <label htmlFor="from" className="block mb-2 font-semibold">
              From
            </label>
            <select
              name="from"
              id="from"
              className="w-full appearance-none text-neutral-800 dark:text-neutral-100 placeholder:text-neutral-400 dark:placeholder:text-neutral-600 inline-block bg-neutral-200/60 dark:bg-neutral-900/60 px-3 h-12 border border-neutral-200 dark:border-neutral-900 rounded-md focus:outline-none focus:bg-neutral-100 dark:focus:bg-neutral-900"
            >
              <option value="">Select Location</option>
              <option value="Ahmednagar">Ahmednagar</option>
              <option value="Akola">Akola</option>
              <option value="Amravati">Amravati</option>
              <option value="Aurangabad">Aurangabad</option>
              <option value="Beed">Beed</option>
              <option value="Bhandara">Bhandara</option>
              <option value="Chandrapur">Chandrapur</option>
              <option value="Hingoli">Hingoli</option>
              <option value="Jalgaon">Jalgaon</option>
              <option value="Kolhapur">Kolhapur</option>
              <option value="Mumbai">Mumbai</option>
              <option value="Nagpur">Nagpur</option>
              <option value="Nanded">Nanded</option>
              <option value="Nashik">Nashik</option>
              <option value="Pune">Pune</option>
              <option value="Ratnagiri">Ratnagiri</option>
              <option value="Satara">Satara</option>
              <option value="Solapur">Solapur</option>
              <option value="Wardha">Wardha</option>
              <option value="Washim">Washim</option>
              <option value="Yavatmal">Yavatmal</option>
            </select>
          </div>

          <div>
            <label htmlFor="to" className="block mb-2 font-semibold">
              To
            </label>
            <select
              name="to"
              id="to"
              className="w-full appearance-none text-neutral-800 dark:text-neutral-100 placeholder:text-neutral-400 dark:placeholder:text-neutral-600 inline-block bg-neutral-200/60 dark:bg-neutral-900/60 px-3 h-12 border border-neutral-200 dark:border-neutral-900 rounded-md focus:outline-none focus:bg-neutral-100 dark:focus:bg-neutral-900"
            >
              <option value="">Select Location</option>
              <option value="Ahmednagar">Ahmednagar</option>
              <option value="Akola">Akola</option>
              <option value="Amravati">Amravati</option>
              <option value="Aurangabad">Aurangabad</option>
              <option value="Beed">Beed</option>
              <option value="Bhandara">Bhandara</option>
              <option value="Chandrapur">Chandrapur</option>
              <option value="Hingoli">Hingoli</option>
              <option value="Jalgaon">Jalgaon</option>
              <option value="Kolhapur">Kolhapur</option>
              <option value="Mumbai">Mumbai</option>
              <option value="Nagpur">Nagpur</option>
              <option value="Nanded">Nanded</option>
              <option value="Nashik">Nashik</option>
              <option value="Pune">Pune</option>
              <option value="Ratnagiri">Ratnagiri</option>
              <option value="Satara">Satara</option>
              <option value="Solapur">Solapur</option>
              <option value="Wardha">Wardha</option>
              <option value="Washim">Washim</option>
              <option value="Yavatmal">Yavatmal</option>
            </select>
          </div>

          <div>
            <label htmlFor="date" className="block mb-2 font-semibold">
              Choose Date
            </label>
            <input
              type="date"
              name="date"
              id="date"
              className="w-full appearance-none text-neutral-800 dark:text-neutral-100 placeholder:text-neutral-400 dark:placeholder:text-neutral-600 inline-block bg-neutral-200/60 dark:bg-neutral-900/60 px-3 h-12 border border-neutral-200 dark:border-neutral-900 rounded-md focus:outline-none focus:bg-neutral-100 dark:focus:bg-neutral-900"
            />
          </div>

          <div>
            <label htmlFor="time" className="block mb-2 font-semibold">
              Choose Time
            </label>
            <input
              type="time"
              name="time"
              id="time"
              className="w-full appearance-none text-neutral-800 dark:text-neutral-100 placeholder:text-neutral-400 dark:placeholder:text-neutral-600 inline-block bg-neutral-200/60 dark:bg-neutral-900/60 px-3 h-12 border border-neutral-200 dark:border-neutral-900 rounded-md focus:outline-none focus:bg-neutral-100 dark:focus:bg-neutral-900"
            />
          </div>

          <div>
            <label htmlFor="seat" className="block mb-2 font-semibold">
              Total Seats
            </label>
            <input
              type="number"
              placeholder="Enter seat"
              name="seat"
              id="seat"
              className="w-full appearance-none text-neutral-800 dark:text-neutral-100 placeholder:text-neutral-400 dark:placeholder:text-neutral-600 inline-block bg-neutral-200/60 dark:bg-neutral-900/60 px-3 h-12 border border-neutral-200 dark:border-neutral-900 rounded-md focus:outline-none focus:bg-neutral-100 dark:focus:bg-neutral-900"
            />
          </div>

          <div className="col-span-1 sm:col-span-2 md:col-span-3 flex items-center justify-center">
            <button className="sm:w-1/4 px-4 h-12 bg-red-600 text-neutral-50 text-base font-normal rounded-md">
                Check Availability
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;