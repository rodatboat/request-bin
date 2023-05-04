import React, { useEffect, useState } from 'react';
import linkSvg from "/link.svg";
import githubSvg from "/github.svg";
import './navbar.css';

export default function NavBar(pageProps) {

    const [recentBins, setRecentBins] = useState(null);

    const getRecentBins = () => {
        if (window.localStorage.getItem("bins")) {
            setRecentBins(JSON.parse(window.localStorage.getItem("bins")))
        }
    }

    useEffect(() => {
        getRecentBins();
    }, []);

    return (
        <div className='flex-initial shrink-0 h-16 flex items-center border-b'>
            <div className='flex-1 flex flex-row justify-between max-w-screen px-8 mx-auto h-full'>
                <div className="inline-flex gap-2 items-center">
                    <a name="Go back home link" href="/" className="self-center">
                        <h1 className='inline-flex items-center text-4xl tracking-wide font-bold gap-2'>
                            rez.
                        </h1>
                    </a>

                    <a name="Go to github repo" href="https://github.com/rodatboat/request-bin" className="self-center">
                        <img className="w-[24px]" src={githubSvg} />
                    </a>
                </div>
                <div className='flex flex-row gap-2 text-sm'>
                    {pageProps.children}
                    {recentBins ? <div className="dropdown relative h-full border-b-0 hover:border-b-2 border-whitetext-secondary hover:text-white hover:border-white justify-center flex px-4 transition-all duration-150 ease-in-out">
                        <p className="self-center">Recent Bins</p>
                        <div className="hidden dropdown-content z-1 absolute pt-16 w-full">
                            <div className="flex flex-col gap-1 h-full w-full bg-black text-secondary border border-t-0 rounded-b px-1 py-1 text-sm">
                                {recentBins.map((b, i) => (
                                    <a key={b} href={`/${b}`} className="text-center hover:text-white transition-all duration-300 ease-in-out">
                                        {b.split("-")[0]}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div> : null}

                </div>
            </div>
        </div>
    )
}
