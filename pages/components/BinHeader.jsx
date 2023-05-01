import React from 'react'

export default function BinHeader({ bid = null }) {
    return (
        <div className='flex-initial h-24 flex items-center border-b'>
            <div className='flex-1 flex flex-row justify-between max-w-screen px-2 md:max-w-7xl mx-auto'>
                <h1 className='inline-flex text-2xl font-medium gap-2'>
                    {bid}

                    <span className='inline text-xs self-center bg-gray text-secondary font-medium px-2 rounded-xl'>
                        Public
                    </span>
                </h1>
                <div className='flex flex-row gap-2 text-sm'>
                    <button className='font-medium border rounded px-4 text-secondary hover:text-white hover:border-white transition-all duration-150 ease-in-out'>
                        Copy
                    </button>
                    <button className='font-medium border rounded px-2 border-white bg-white text-black hover:text-white hover:bg-black hover:border-white transition-all duration-150 ease-in-out'>
                        New
                    </button>
                </div>
            </div>
        </div>
    )
}
