import React, { useEffect } from 'react';
import copy from 'copy-to-clipboard';
import linkSvg from "/link.svg";
import newSvg from "/new.svg";

export default function BinHeader({ bid = null, binData }) {
    const copyToClipboard = () => {
        let isCopy = copy(`${import.meta.env.VITE_APP_URI}/${bid}`)
    }

    const createBin = async () => {
        return fetch(import.meta.env.VITE_DB_URI + "/bins/new").then((res) => res.json())
            .then((data) => {
                if (data.success) {
                    window.location.href = "/" + data.data.bin.bid
                }
            });
    }

    const saveBinsToLocal = () => {
        let currentBins = []
        if (window.localStorage.getItem("bins")) {
            let currentBins = JSON.parse(window.localStorage.getItem("bins"));
            currentBins.includes(bid) ? null : currentBins.push(bid);
            window.localStorage.setItem("bins", JSON.stringify(currentBins));
        } else {
            currentBins.includes(bid) ? null : currentBins.push(bid);
            window.localStorage.setItem("bins", JSON.stringify(currentBins));
        }
    }

    useEffect(() => {
        saveBinsToLocal();
    }, []);

    return (
        <div className='flex-initial shrink-0 h-24 flex items-center border-b'>
            <div className='flex-1 flex flex-col md:flex-row justify-between max-w-screen px-2 md:max-w-7xl mx-auto'>
                <span className='inline md:hidden text-xs self-start md:self-center bg-gray text-secondary font-medium px-2 rounded-xl'>
                    {binData.bin.private ? "Private" : "Public"}
                </span>
                <h1 className=' flex flex-col md:flex-row self-start md:self-center text-lg md:text-2xl font-medium gap-2 mb-1 md:mb-0'>
                    <a name="Bin home url" className=" items-center" href={`/${bid}`}>{bid}
                    </a>

                    <span className='hidden md:inline text-xs self-start md:self-center bg-gray text-secondary font-medium px-2 rounded-xl'>
                        {binData.bin.private ? "Private" : "Public"}
                    </span>
                </h1>
                <div className='flex flex-row gap-2 text-sm self-start md:self-center'>
                    <button onClick={copyToClipboard} className='inline-flex items-center gap-1 font-medium border rounded px-2 py-1 text-secondary hover:text-white hover:border-white transition-all duration-150 ease-in-out'>
                        <img alt="Link icon" className="w-[14px]" src={linkSvg} />
                        Copy
                    </button>
                    <button onClick={createBin} className='inline-flex items-center gap-1 font-medium border rounded px-2 py-1 border-white bg-white text-black hover:text-white hover:bg-black hover:border-white transition-all duration-150 ease-in-out'>
                        <img alt="New bin icon" className="w-[14px]" src={newSvg} />
                        New
                    </button>
                </div>
            </div>
        </div>
    )
}
