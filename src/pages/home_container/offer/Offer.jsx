import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaCopy } from 'react-icons/fa';
import Save from '../../../assets/save.png';

const Offer = () => {
    const [copied, setCopied] = useState(false);

    const handleCopy = (code) => {
        navigator.clipboard.writeText(code)
        .then(() => {
            setCopied(true);
            setTimeout(() => {
                setCopied(false)
            }, 2000);
        })
        .catch((err) => {
            console.log("Failed to Copy", err);
        });
    };

    return (
        <div className="w-full px-4 sm:px-7 md:px-16 lg:px-28 mb-[8ch]">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-xl sm:text-2xl font-medium">
                    Special Offer
                </h1>
                <Link to="/offer" className="text-red-600">
                    View All
                </Link>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
                <div className="bg-zinc-200/30 dark:bg-zinc-800/20 p-6 sm:p-8 rounded-xl flex items-center gap-x-4 shadow-md">
                    <img src={Save} alt="save img" className="w-32 sm:w-52 aspect-[2/1] object-contain" />
                    <div className="flex-1 flex flex-col space-y-4 sm:space-y-5">
                        <h2 className="text-lg sm:text-xl font-semibold text-neutral-800 dark:text-neutral-50">
                            Get 40% off on your first booking
                        </h2>
                        <div className="flex items-center gap-x-4 sm:gap-x-5">
                            <div className="w-fit border border-dashed px-3 py-1 border-neutral-300 dark:border-neutral-800 bg-red-500/10 dark:bg-red-800/5 rounded-md flex items-center">
                                {
                                    copied
                                    ? <span className="text-green-600">Copied</span>
                                    : <span className="text-red-600">GTECH08</span>
                                }
                            </div>
                            <button onClick={() => handleCopy("GTECH08")} className="text-lg sm:text-xl text-red-600">
                                <FaCopy />
                            </button>
                        </div>
                        <p className="text-sm text-neutral-400 dark:text-neutral-600 font-medium">
                            Valid till: <span className="font-medium">31st September</span>
                        </p>
                    </div>
                </div>

                <div className="bg-zinc-200/30 dark:bg-zinc-800/20 p-6 sm:p-8 rounded-xl flex items-center gap-x-4 shadow-md">
                    <img src={Save} alt="save img" className="w-32 sm:w-52 aspect-[2/1] object-contain" />
                    <div className="flex-1 flex flex-col space-y-4 sm:space-y-5">
                        <h2 className="text-lg sm:text-xl font-semibold text-neutral-800 dark:text-neutral-50">
                            Get Rs. 399 off on for Female passengers
                        </h2>
                        <div className="flex items-center gap-x-4 sm:gap-x-5">
                            <div className="w-fit border border-dashed px-3 py-1 border-neutral-300 dark:border-neutral-800 bg-red-500/10 dark:bg-red-800/5 rounded-md flex items-center">
                                {
                                    copied
                                    ? <span className="text-green-600">Copied</span>
                                    : <span className="text-red-600">WOMEN100</span>
                                }
                            </div>
                            <button onClick={() => handleCopy("WOMEN100")} className="text-lg sm:text-xl text-red-600">
                                <FaCopy />
                            </button>
                        </div>
                        <p className="text-sm text-neutral-400 dark:text-neutral-600 font-medium">
                            Valid till: <span className="font-medium">31st September</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Offer;