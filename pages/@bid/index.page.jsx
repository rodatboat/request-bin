import React from 'react';
import BinHeader from '../components/BinHeader';
import RequestBar from '../components/RequestBar';
import BinLanding from '../components/BinLanding';

export { Page }

export const documentProps = {
  // This title and description will override the defaults
  title: 'Request bin',
  // description: 'Our mission is to explore the galaxy.'
}

function Page(pageProps) {
  const { bid } = pageProps;

  return (
    <>
      <div className='flex flex-col h-full w-full overflow-hidden'>
        <BinHeader {...pageProps} />
        <div className='flex flex-row w-full h-full'>
          <RequestBar {...pageProps} />
          <BinLanding {...pageProps} />
        </div>
      </div>
    </>
  )
}