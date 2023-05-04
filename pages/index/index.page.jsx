import React from 'react';
import NavBar from '../components/NavBar';

import copy from 'copy-to-clipboard';
import newSvg from "/new.svg";

export { Page }

function Page(pageProps) {
  const createBin = async () => {
    return fetch(import.meta.env.VITE_DB_URI + "/bins/new").then((res) => res.json())
      .then((data) => {
        if (data.success) {
          window.location.href = "/" + data.data.bin.bid
        }
      });
  }

  return (
    <>
      <NavBar {...pageProps}>
      </NavBar>
      <div className="flex flex-col h-96 justify-center items-center text-center max-w-4xl mx-auto gap-1">
        <h1 className="mt-24 text-7xl font-bold">The way to inspect any HTTP request.</h1>
        <p className="text-secondary text-xl">Rez allows you to send requests to a custom endpoint, and analyze data.</p>
        <button onClick={createBin} className="inline-flex w-max items-center mt-4 gap-1 font-medium border rounded px-4 py-2 border-white bg-white text-black hover:text-white hover:bg-black hover:border-white transition-all duration-150 ease-in-out">
          <img className="w-[18px]" src={newSvg} />
          Try it now
        </button>
      </div>
    </>
  )
}
