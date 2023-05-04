import React from 'react'
import dayjs from "dayjs";

export default function BinLanding(pageProps) {
  const { bid = null, binData } = pageProps;

  return (
    <div className='flex-1 flex flex-col w-full p-2 bg-gray/25'>
      <div className='border rounded flex-initial border-gray bg-black'>
        <div className=' flex flex-row justify-between py-1 px-2 border-b border-gray text-secondary text-xs'>
          <p className=''>ENDPOINT</p>
          <div className='inline-flex'>
            <p>{bid}</p>
          </div>
        </div>

        <div className='px-4 py-4 overflow-hidden'>
          <div>
            <h2 className='text-secondary uppercase text-xs'>
              Your endpoint is
            </h2>
            <h1 className='flex flex-row font-medium text-lg gap-2 items-center'>
              {`${import.meta.env.VITE_APP_URI}/${bid}`}
            </h1>
          </div>

          <div className='mt-4'>
            <h2 className='text-secondary uppercase text-xs'>
              LAST REQUEST
            </h2>
            <h1 className='font-medium text-sm'>
              {dayjs(binData.bin.last_req).format(
              "MM/DD/YYYY HH:mm:ss"
            )}
            </h1>
          </div>

          <div className='mt-4'>
            <h2 className='text-secondary text-sm'>
              Send requests to this endpoint to inspect webhooks, custom events and more.
            </h2>
          </div>
        </div>
      </div>
    </div>
  )
}
