import React from 'react';
import copy from 'copy-to-clipboard';
import linkSvg from "/link.svg";
import newSvg from "/new.svg";

export default function BinHeader({ bid = null }) {
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

    return (
        <div className='flex-initial h-24 flex items-center border-b'>
            <div className='flex-1 flex flex-row justify-between max-w-screen px-2 md:max-w-7xl mx-auto'>
                <h1 className='inline-flex items-center text-2xl font-medium gap-2'>
                    <a className="inline-flex items-center gap-1" href={`/${bid}`}>{bid}
                    </a>

                    <span className='inline text-xs self-center bg-gray text-secondary font-medium px-2 rounded-xl'>
                        Public
                    </span>
                </h1>
                <div className='flex flex-row gap-2 text-sm'>
                    <button onClick={copyToClipboard} className='inline-flex items-center gap-1 font-medium border rounded px-3 text-secondary hover:text-white hover:border-white transition-all duration-150 ease-in-out'>
                    <img className="w-[14px]" src={linkSvg} />
                        Copy
                    </button>
                    <button onClick={createBin} className='inline-flex items-center gap-1 font-medium border rounded px-2 border-white bg-white text-black hover:text-white hover:bg-black hover:border-white transition-all duration-150 ease-in-out'>
                    <img className="w-[14px]" src={newSvg} />
                        New
                    </button>
                </div>
            </div>
        </div>
    )
}
