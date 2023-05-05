import React from 'react';
import NavBar from '../components/NavBar';

import dayjs from "dayjs";
import copy from 'copy-to-clipboard';
import newSvg from "/new.svg";
import linkSvg from "/link.svg";

export { Page }

function Page(pageProps) {
  const { recentBins } = pageProps;

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
      <div className="max-w-screen h-full overflow-auto pt-16 p-2">
        <div className="flex flex-col h-96 justify-center items-center text-center max-w-4xl mx-auto gap-1">
          <h1 className="mt-24 text-7xl font-bold">The way to inspect any HTTP request.</h1>
          <p className="text-secondary text-xl">Rez allows you to send requests to a custom endpoint, and analyze data.</p>
          <button onClick={createBin} className="inline-flex w-max items-center mt-4 gap-1 font-medium border rounded px-4 py-2 border-white bg-white text-black hover:text-white hover:bg-black hover:border-white transition-all duration-150 ease-in-out">
            <img className="w-[18px]" src={newSvg} />
            Try it now
          </button>
        </div>

        <div className="mt-48 w-full max-w-4xl mx-auto p-4">
          <h2 className="text-5xl font-bold text-center mb-8">Discover</h2>
          <div className="overflow-hidden">
            <div className="flex flex-col w-full border rounded overflow-auto scrollbar-hide grow-1 h-[145px]">
              {recentBins.length === 0 ? <div className="text-secondary flex flex-row justify-between w-full border-b px-2 py-1 rounded-t text-sm">
                <div className="inline-flex items-center justify-center w-full">
                  <p>No public bins available</p>
                </div>
              </div> : null}
              {recentBins.map((b, i) => (
                <div key={b.bid} className="text-secondary flex flex-row justify-between w-full border-b px-2 py-1 rounded-t text-sm">
                  <div className="inline-flex gap-1 items-center">
                    <p>ID:</p>
                    <a href={`/${b.bid}`} className="inline-flex items-center gap-1 hover:text-white w-max">
                      {b.bid}
                      <img className="w-[14px]" src={linkSvg} />
                    </a>
                  </div>

                  <div className="inline-flex gap-1 items-center">
                    {b.last_req}
                  </div>


                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
