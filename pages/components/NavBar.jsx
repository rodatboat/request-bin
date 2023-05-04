import React, { useEffect, useState } from 'react';
import linkSvg from "/link.svg";

const BinsMenu = ({ active, setActive }) => {
    const [reqs, setReqs] = useState([]);
    useEffect(() => {
        setReqs(window.localStorage.getItem("reqs") ? JSON.parse(window.localStorage.getItem("reqs")): [])
    }, [])

    useEffect(() => {
    }, [reqs])

    return (
        <>
            <div id="dropdown" onMouseEnter={() => setActive(true)} onMouseLeave={() => setActive(false)} className={`${active ? "" : "hidden"} fixed mt-16 z-10 bg-black divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700`}>
                <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                    {reqs.map((r,i)=> <>{`${r.bid}`}</>)}
                    <li>
                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
                    </li>
                    <li>
                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
                    </li>
                    <li>
                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
                    </li>
                    <li>
                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</a>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default function NavBar(pageProps) {
    const [toggleMenu, setToggleMenu] = useState(false);

    useEffect(() => {
        // window.localStorage.getItem("reqs")
    }, [])

    return (
        <div className='flex-initial shrink-0 h-16 flex items-center border-b'>
            <div className='flex-1 flex flex-row justify-between max-w-screen px-8 mx-auto h-full'>
                <a name="Go back home link" href="/" className="self-center">
                    <h1 className='inline-flex items-center text-4xl tracking-wide font-bold gap-2'>
                        rez.
                    </h1>
                </a>
                <div className='flex flex-row gap-2 text-sm'>
                    {pageProps.children}
                    {/* <a href="/"
                        onMouseEnter={() => setToggleMenu(true)}
                        onMouseLeave={() => setToggleMenu(false)}
                        className="h-full border-b-0 hover:border-b text-secondary hover:text-white hover:border-white justify-center flex px-4 transition-all duration-150 ease-in-out">
                        <p className="self-center">Bins</p>
                    </a>
                    <BinsMenu active={toggleMenu} setActive={setToggleMenu} /> */}

                </div>
            </div>
        </div>
    )
}
