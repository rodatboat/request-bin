import React from 'react';
import copy from 'copy-to-clipboard';

import sampleSvg from '/sample.svg'
import linkSvg from '/link.svg'

export default function BinLanding(pageProps) {
  const { bid = null, binData } = pageProps;

  const copyToClipboard = () => {
    let isCopy = copy(`curl -d '{ "bid": "${bid}" }' -H "Content-Type: application/json" ${import.meta.env.VITE_APP_URI}/${bid}`)
}

  const sendExampleRequests = async () => {
    await fetch(import.meta.env.VITE_APP_URI + `/${bid}/example/get/request?` + new URLSearchParams({
      id: bid,
      success: true
    }), {
      method: "GET",
    }).then((res) => {
      if (res.status === 404) {
        throw new Error("Not 200 response", { cause: res });
      } else {
        // got the desired response
      }
    })
      .catch((e) => { });

    await fetch(import.meta.env.VITE_APP_URI + `/${bid}/example/post/request`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "*/*",
        "Accept-Encoding": "gzip, deflate, br",
        "Connection": "keep-alive"
      },
      body: JSON.stringify({
        id: bid,
        success: true
      })
    }).then((res) => {
      if (res.status === 404) {
        // make the promise be rejected if we didn't get a 2xx response
        throw new Error("Not 200 response", { cause: res });
      } else {
        // got the desired response
      }
    })
      .catch((e) => { });
  }

  return (
    <div className='flex-1 flex flex-col w-full p-2 bg-gray/25 overflow-auto'>
      <div className='border rounded flex-initial border-gray bg-black'>
        <div className=' flex flex-row justify-between py-1 px-2 border-b border-gray text-secondary text-xs'>
          <p className=''>ENDPOINT</p>
          <div className='inline-flex'>
            <p>{bid}</p>
          </div>
        </div>

        <div className='px-4 py-4 overflow-hidden'>
          <div className="flex flex-col md:flex-row justify-between">
            <div className="">
              <h2 className='text-secondary uppercase text-xs'>
                Your endpoint is
              </h2>
              <h1 className='flex md:flex-row font-medium text-lg gap-2 items-center'>
                {`${import.meta.env.VITE_APP_URI}/${bid}`}
              </h1>
            </div>
            <div className="self-start md:self-center mt-2 md:my-0">
              <button onClick={sendExampleRequests} className='inline-flex items-center gap-1 font-medium text-sm border rounded px-3 py-1 text-secondary hover:text-white hover:border-white transition-all duration-150 ease-in-out'>
                <img alt="Send sample request icon" className="w-[12px]" src={sampleSvg} />
                Send Example Request
              </button>
            </div>
          </div>

          <div className='mt-4'>
            <h2 className='text-secondary uppercase text-xs'>
              LAST REQUEST
            </h2>
            <h1 className='font-medium text-sm'>
              {binData.bin.last_req}
            </h1>
          </div>

          <div className='mt-4'>
            <h2 className='text-secondary text-sm'>
              Send requests to this endpoint to inspect webhooks, custom events and more.
            </h2>

            <div className='px-2 py-1 bg-gray/50 rounded border border-gray mt-1'>
            <p onClick={copyToClipboard} className='inline-flex items-center overflow-hidden whitespace-nowrap text-ellipsis w-full gap-1 font-regular text-sm text-secondary transition-all duration-150 ease-in-out cursor-pointer'>
              {`curl -d '{ "bid": "${bid}" }' -H "Content-Type: application/json" ${import.meta.env.VITE_APP_URI}/${bid}`}<img alt="Copy cURL command" className="w-[12px]" src={linkSvg} />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
