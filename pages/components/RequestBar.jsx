import React from 'react';
import dayjs from "dayjs";

const RequestNavItem = (req) => {
  return (
    <>
    <a href={`/${req.bid}/${req.rid}`}>
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
  const {bid, binData=null} = pageProps;
  return (
    <div className='hidden md:flex flex-col flex-initial grow-0 w-80 border-r text-sm'>
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
        {binData.requests.map((b,i) => <RequestNavItem key={b.rid} {...b} />).reverse()}
      </div>
    </div>
  )
}
