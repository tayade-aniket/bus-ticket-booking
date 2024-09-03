import React from 'react';
import { FaLocationDot } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import Logo from "../../assets/logo.png";

const Footer = () => {
  return (
    <footer className="w-full px-4 py-8 bg-neutral-200/60 dark:bg-neutral-900/70">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5">
        <div className="space-y-5 md:col-span-2">
          <Link to="/" className="text-xl text-neutral-800 dark:text-neutral-200 font-bold">
            <img src={Logo} alt="logo" className="w-44 h-auto object-contain" />
          </Link>
          <p className="text-neutral-600 dark:text-neutral-500 text-base font-normal md:pr-10">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam placeat corporis, rerum laborum optio laboriosam perferendis sit culpa doloribus, tempora aliquam repellendus reprehenderit, ullam alias.
          </p>
        </div>

        <div className="space-y-7">
          <h1 className="text-lg font-medium">Resources</h1>
          <ul className="space-y-2 text-neutral-600 dark:text-neutral-500 text-base font-normal">
            <li><Link to="#" className="hover:text-red-600 ease-in-out duration-300">Blog</Link></li>
            <li><Link to="#" className="hover:text-red-600 ease-in-out duration-300">FAQ</Link></li>
            <li><Link to="#" className="hover:text-red-600 ease-in-out duration-300">Help Center</Link></li>
            <li><Link to="#" className="hover:text-red-600 ease-in-out duration-300">Contact Us</Link></li>
          </ul>
        </div>

        <div className="space-y-7">
          <h1 className="text-lg font-medium">Legal</h1>
          <ul className="space-y-2 text-neutral-600 dark:text-neutral-500 text-base font-normal">
            <li><Link to="#" className="hover:text-red-600 ease-in-out duration-300">Privacy Policy</Link></li>
            <li><Link to="#" className="hover:text-red-600 ease-in-out duration-300">Terms of Service</Link></li>
            <li><Link to="#" className="hover:text-red-600 ease-in-out duration-300">Refund Policy</Link></li>
            <li><Link to="#" className="hover:text-red-600 ease-in-out duration-300">Cancellation Policy</Link></li>
          </ul>
        </div>

        <div className="space-y-7">
          <h1 className="text-lg font-medium">Our Locations</h1>
          <div className="space-y-4">
            {[ 
              { title: "Old City, Neemwadi, Akola." },
              { title: "RaamLata, New City, Akola." },
              { title: "Toshnival Layout, Akola." }
            ].map((location, index) => (
              <div key={index} className="flex gap-x-2 items-start">
                <FaLocationDot className="text-2xl text-red-500 dark:text-neutral-500" />
                <div className="flex flex-col">
                  <p className="text-xs text-neutral-600 dark:text-neutral-500">For Reservations</p>
                  <p className="text-sm text-neutral-700 dark:text-neutral-400">{location.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;