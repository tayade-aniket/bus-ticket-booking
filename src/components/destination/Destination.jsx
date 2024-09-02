import React, { useState } from "react";

const Destination = () => {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");

  const handleFromChange = (e) => {
    setFrom(e.target.value);
  };

  const handleToChange = (e) => {
    setTo(e.target.value);
  };

  const isDestinationSelected = from && to;

  return (
    <div className="w-full space-y-4">
      {!isDestinationSelected ? (
        <div className="w-full grid grid-cols-2 gap-10 ">
          <div className="">
            <label htmlFor="from" className="block mb-2 font-semibold">
              From
            </label>
            <select
              name="from"
              id="from"
              value={from}
              onChange={handleFromChange}
              className="w-full appearance-none text-neutral-800 dark:text-neutral-100 placeholder:text-neutral-400 dark:placeholder:text-neutral-600 inline-block bg-neutral-200/60 dark:bg-neutral-900/60 px-3 h-11 border border-neutral-200 dark:border-neutral-900 rounded-md focus:outline-none focus:bg-neutral-100 dark:focus:bg-neutral-900"
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

          <div className="">
            <label htmlFor="from" className="block mb-2 font-semibold">
              To
            </label>
            <select
              name="to"
              id="to"
              value={to}
              onChange={handleToChange}
              className="w-full appearance-none text-neutral-800 dark:text-neutral-100 placeholder:text-neutral-400 dark:placeholder:text-neutral-600 inline-block bg-neutral-200/60 dark:bg-neutral-900/60 px-3 h-11 border border-neutral-200 dark:border-neutral-900 rounded-md focus:outline-none focus:bg-neutral-100 dark:focus:bg-neutral-900"
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
        </div>
      ) : (
        <div className="space-y-5">
          <h1 className="text- xl text-neutral-800 dark:text-neutral-100 font-medium">
            Your Destination
          </h1>
          <div className="w-full flex items-center gap-x-3">
            <div className="w-fit text-base font-semibold">
              From:- <span className="ml-1.5 font-medium">{from}</span>
            </div>

            <div className="flex-1">
              <div className="w-full h-[1px] border border-dashed border-neutral-200 dark:border-l-neutral-800/80"></div>
            </div>

            <div className="w-fit text-base font-semibold">
              To:- <span className="ml-1.5 font-medium">{to}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Destination;
