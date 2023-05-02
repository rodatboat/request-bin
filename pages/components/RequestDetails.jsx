import React from 'react'

export default function RequestDetails(pageProps) {
  const { bid = null } = pageProps;
  return (
    <div className='flex-1 flex flex-col w-full p-2 bg-gray/25'>
      <div className='border rounded flex-initial border-gray bg-black'>
        <div className=' flex flex-row justify-between py-1 px-2 border-b border-gray text-secondary text-xs'>
          <p className=''>HTTP REQUEST</p>
          <div className='inline-flex gap-2'>
            <p>{bid}</p>
            <p>1682983287</p>
          </div>
        </div>

        <div className='px-4 py-4 overflow-hidden'>
          <div>
            <h2 className='text-secondary uppercase text-xs mb-1'>
              DETAILS
            </h2>
            <div>
              POST
            </div>
          </div>

          <div>
            <h2 className='text-secondary uppercase text-xs mb-1'>
              HEADERS
            </h2>
            <div className='flex flex-col rounded border border-gray'>
              <div className='flex flex-row h-8 items-center text-sm border-b'>
                <p className='basis-1/3 px-2 h-full flex items-center text-secondary'>KEY</p>
                <p className='basis-full px-2 border-l h-full flex items-center text-secondary'>VALUE</p>
              </div>

              <div className='flex flex-row h-8 items-center text-sm border-b'>
                <p className='basis-1/3 px-2 h-full flex items-center'>host</p>
                <p className='basis-full px-2 border-l h-full flex items-center text-secondary'>enzqe722oq6w.x.pipedream.net</p>
              </div>

              <div className='flex flex-row h-8 items-center text-sm border-b'>
                <p className='basis-1/3 px-2 h-full flex items-center'>accept</p>
                <p className='basis-full px-2 border-l h-full flex items-center text-secondary'>*/*</p>
              </div>

              <div className='flex flex-row h-8 items-center text-sm'>
                <p className='basis-1/3 px-2 h-full flex items-center'>accept-encoding</p>
                <p className='basis-full px-2 border-l h-full flex items-center text-secondary'>gzip, deflate, br</p>
              </div>

            </div>
          </div>

          <div className='mt-4'>
            <h2 className='text-secondary uppercase text-xs mb-1'>
              QUERY
            </h2>
            <div className='flex flex-col rounded border border-gray'>
              <div className='flex flex-row h-8 items-center text-sm border-b'>
                <p className='basis-1/3 px-2 h-full flex items-center text-secondary'>KEY</p>
                <p className='basis-full px-2 border-l h-full flex items-center text-secondary'>VALUE</p>
              </div>

              <div className='flex flex-row h-8 items-center text-sm border-b'>
                <p className='basis-1/3 px-2 h-full flex items-center'>id</p>
                <p className='basis-full px-2 border-l h-full flex items-center text-secondary'>ddc5f0ed-60ff-4435-abc5-590fafe4a771</p>
              </div>

              <div className='flex flex-row h-8 items-center text-sm border-b'>
                <p className='basis-1/3 px-2 h-full flex items-center'>timestamp</p>
                <p className='basis-full px-2 border-l h-full flex items-center text-secondary'>1544827965</p>
              </div>

              <div className='flex flex-row h-8 items-center text-sm'>
                <p className='basis-1/3 px-2 h-full flex items-center'>event</p>
                <p className='basis-full px-2 border-l h-full flex items-center text-secondary'>delivered</p>
              </div>

            </div>
          </div>

          <div className='mt-4'>
            <h2 className='text-secondary uppercase text-xs mb-1'>
              BODY
            </h2>
            <h1 className='font-medium text-sm'>
              1682983287
            </h1>
          </div>

        </div>
      </div>
    </div>
  )
}