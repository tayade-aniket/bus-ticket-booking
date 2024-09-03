import { Link } from 'react-router-dom';

import { FaCheck } from "react-icons/fa6";

// images
import Bus from '../../assets/bus10.png';

export default function Component() {
  return (
    <div>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container grid items-center gap-6 px-4 py-9 md:px-6 lg:grid-cols-2 lg:gap-12">
          <img
            src={Bus}
            width={900}
            height={450}
            alt="Redbus Hero"
            className="mx-auto rounded-xl object-cover"
            style={{ aspectRatio: "900/450", objectFit: "cover" }}
          />
          <div className="space-y-4">
            <h1 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">About Redbus</h1>
            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Redbus is a leading online bus ticketing platform that connects travelers with bus operators across India.
              Our mission is to make bus travel more accessible, convenient, and enjoyable for everyone.
            </p>
            <Link
              href="#"
              className="inline-flex h-10 items-center justify-center rounded-md bg-red-600 px-8 text-sm font-medium text-white shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              prefetch={false}
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="grid gap-10 sm:px-10 md:gap-16 md:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Our Story</h2>
              <p className="mt-4 text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Redbus was founded in 2006 with the vision of revolutionizing the bus travel industry in India. We
                started as a small startup, but through our commitment to innovation and customer-centric approach, we
                have grown to become the largest online bus ticketing platform in the country.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Our Mission</h2>
              <p className="mt-4 text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                At Redbus, our mission is to make bus travel more accessible, convenient, and enjoyable for everyone. We
                strive to provide our customers with a seamless booking experience, reliable bus services, and
                value-added features that enhance their travel experience.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-10 sm:px-10 md:gap-16 md:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Key Facts</h2>
              <ul className="mt-4 space-y-2 text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                <li>
                  <FaCheck className="mr-2 inline-block h-4 w-4" />
                  Largest online bus ticketing platform in India
                </li>
                <li>
                  <FaCheck className="mr-2 inline-block h-4 w-4" />
                  Over 20 million customers served
                </li>
                <li>
                  <FaCheck className="mr-2 inline-block h-4 w-4" />
                  Partnerships with over 2,500 bus operators
                </li>
                <li>
                  <FaCheck className="mr-2 inline-block h-4 w-4" />
                  Presence in over 2,000 cities across India
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Awards and Recognition</h2>
              <ul className="mt-4 space-y-2 text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                <li>
                  <FaCheck className="mr-2 inline-block h-4 w-4" />
                  Awarded 'Best Online Travel Booking Platform' by IAMAI
                </li>
                <li>
                  <FaCheck className="mr-2 inline-block h-4 w-4" />
                  Recognized as 'Startup of the Year' by Economic Times
                </li>
                <li>
                  <FaCheck className="mr-2 inline-block h-4 w-4" />
                  Featured in Forbes' 'Top 50 Startups in Asia'
                </li>
                <li>
                  <FaCheck className="mr-2 inline-block h-4 w-4" />
                  Awarded 'Best Mobile App' by MMA Smarties
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

function CheckIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  )
}