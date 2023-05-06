import React, { useState } from 'react';

import menuSvg from "/menu.svg";

const RequestNavItem = (req) => {
  return (
    <>
      <a name="View request details" href={`/${req.bid}/${req.rid}`}>
        <div className='flex flex-row mx-2 gap-1 border rounded text-xs items-center h-8 overflow-hidden cursor-pointer'>
          <div className='self-start inline-flex h-full items-center pl-1'>
            <p className='flex min-w-max pr-1 w-24'>
              {req.createdAt}
            </p>
            <p className='flex items-center justify-center border-x px-1 h-full w-14'>
              [{req.method}]
            </p>
          </div>
          <p className='whitespace-nowrap overflow-hidden text-ellipsis'>
            {req.path}
          </p>
        </div>
      </a>
    </>
  )
}

export default function RequestBar(pageProps) {
  const [showReqBar, setShowReqBar] = useState(false);

  const toggleReqBar = () => setShowReqBar(!showReqBar);

  const { bid, binData = null } = pageProps;

  return (
    <>
      <div onClick={toggleReqBar} className='absolute md:hidden z-[999] bottom-0 mb-4 ml-4 mx-auto p-1 bg-black border border-secondary rounded-full flex items-center justify-center'>
        <img alt="Request menu toggle" className="w-6 hover:stroke-white" src={menuSvg} />
      </div>

      <div className={`${showReqBar ? "fixed bg-black w-full h-full top-0" : "hidden"} md:flex flex-col flex-initial grow-0 w-80 border-r text-sm z-50`}>
        <div className='border-b px-2 py-3'>
          <input
            className='rounded w-full bg-black border h-10 placeholder:text-gray px-3 font-medium'
            placeholder={`3 total requests found...`}
            type="text"
            spellCheck={false}
          />
        </div>

        <div className='flex flex-row px-2 py-2 justify-between'>
          <button className='font-medium border rounded px-2 text-secondary hover:text-primary hover:border-primary transition-all duration-150 ease-in-out'>
            LIVE
          </button>
          <button className='font-medium text-secondary hover:text-white transition-all duration-150 ease-in-out'>
            Sort
          </button>
        </div>

        <div className='flex flex-col gap-1 overflow-auto scrollbar-hide'>
          {binData.requests.map((b, i) => <RequestNavItem key={b.rid} {...b} />).reverse()}
        </div>
      </div>
    </>
  )
}
