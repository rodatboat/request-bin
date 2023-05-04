import React, { useEffect } from 'react';
import BinHeader from '../../components/BinHeader';
import NavBar from '../../components/NavBar';
import RequestBar from '../../components/RequestBar';
import RequestDetails from '../../components/RequestDetails';

export { Page }

export const documentProps = {
  // This title and description will override the defaults
  title: 'Request bin',
  // description: 'Our mission is to explore the galaxy.'
}

function Page(pageProps) {
  const { rid, binData } = pageProps;

  useEffect(()=>{
    // window.localStorage.setItem("reqs", JSON.stringify(binData.requests.reverse()))
  })

  return (
    <>
      <div className='flex flex-col h-full w-full overflow-hidden'>
        <NavBar {...pageProps} >
          </NavBar>
        <BinHeader {...pageProps} />
        <div className='flex flex-row w-full h-full'>
          <RequestBar {...pageProps} />
          <RequestDetails {...pageProps} />
        </div>
      </div>
    </>
  )
}
