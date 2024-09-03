export default function Component() {
  return (
    <div className="flex flex-col items-center justify-center">
      <section className="w-full py-12 px-10 md:py-24 lg:py-32">
        <div className="container px-4 py-7 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Services</h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Redbus offers a wide range of services to make your bus travel experience seamless and convenient.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6 mt-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            <div className="flex flex-col items-start gap-4">
              <div className="bg-red-600 text-neutral-50 rounded-md p-3 flex items-center justify-center">
                <TicketIcon className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold">Online Booking</h3>
              <p className="text-muted-foreground">Book your bus tickets online with ease and convenience.</p>
            </div>
            <div className="flex flex-col items-start gap-4">
              <div className="bg-red-600 text-neutral-50 rounded-md p-3 flex items-center justify-center">
                <MapPinIcon className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold">Route Planner</h3>
              <p className="text-muted-foreground">Plan your journey with our comprehensive route planner.</p>
            </div>
            <div className="flex flex-col items-start gap-4">
              <div className="bg-red-600 text-neutral-50 rounded-md p-3 flex items-center justify-center">
                <ClockIcon className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold">Schedule Tracking</h3>
              <p className="text-muted-foreground">Stay updated on bus schedules and arrival/departure times.</p>
            </div>
            <div className="flex flex-col items-start gap-4">
              <div className="bg-red-600 text-neutral-50 rounded-md p-3 flex items-center justify-center">
                <WalletIcon className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold">Cashless Payments</h3>
              <p className="text-muted-foreground">Pay for your bus tickets securely and conveniently.</p>
            </div>
            <div className="flex flex-col items-start gap-4">
              <div className="bg-red-600 text-neutral-50 rounded-md p-3 flex items-center justify-center">
                <CoffeeIcon className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold">Food and Drinks</h3>
              <p className="text-muted-foreground">Enjoy a variety of food and drinks during your bus journey.</p>
            </div>
            <div className="flex flex-col items-start gap-4">
              <div className="bg-red-600 text-neutral-50 rounded-md p-3 flex items-center justify-center">
                <WifiIcon className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold">On-board Wifi</h3>
              <p className="text-muted-foreground">Stay connected with high-speed internet during your trip.</p>
            </div>
            <div className="flex flex-col items-start gap-4">
              <div className="bg-red-600 text-neutral-50 rounded-md p-3 flex items-center justify-center">
                <LuggageIcon className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold">Luggage Assistance</h3>
              <p className="text-muted-foreground">Get help with your luggage for a hassle-free journey.</p>
            </div>
            <div className="flex flex-col items-start gap-4">
              <div className="bg-red-600 text-neutral-50 rounded-md p-3 flex items-center justify-center">
                <ShipWheelIcon className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold">Accessibility</h3>
              <p className="text-muted-foreground">Accessible services for passengers with special needs.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

function ClockIcon(props) {
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
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  )
}


function CoffeeIcon(props) {
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
      <path d="M10 2v2" />
      <path d="M14 2v2" />
      <path d="M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1" />
      <path d="M6 2v2" />
    </svg>
  )
}


function LuggageIcon(props) {
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
      <path d="M6 20h0a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h0" />
      <path d="M8 18V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v14" />
      <path d="M10 20h4" />
      <circle cx="16" cy="20" r="2" />
      <circle cx="8" cy="20" r="2" />
    </svg>
  )
}


function MapPinIcon(props) {
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
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  )
}


function ShipWheelIcon(props) {
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
      <circle cx="12" cy="12" r="8" />
      <path d="M12 2v7.5" />
      <path d="m19 5-5.23 5.23" />
      <path d="M22 12h-7.5" />
      <path d="m19 19-5.23-5.23" />
      <path d="M12 14.5V22" />
      <path d="M10.23 13.77 5 19" />
      <path d="M9.5 12H2" />
      <path d="M10.23 10.23 5 5" />
      <circle cx="12" cy="12" r="2.5" />
    </svg>
  )
}


function TicketIcon(props) {
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
      <path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z" />
      <path d="M13 5v2" />
      <path d="M13 17v2" />
      <path d="M13 11v2" />
    </svg>
  )
}


function WalletIcon(props) {
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
      <path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1" />
      <path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4" />
    </svg>
  )
}


function WifiIcon(props) {
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
      <path d="M12 20h.01" />
      <path d="M2 8.82a15 15 0 0 1 20 0" />
      <path d="M5 12.859a10 10 0 0 1 14 0" />
      <path d="M8.5 16.429a5 5 0 0 1 7 0" />
    </svg>
  )
}