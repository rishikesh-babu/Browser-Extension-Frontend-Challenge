import React from 'react'

export default function Card({ logo, name, description, isActive }) {
    return (
        <div className='p-3 bg-gray-800 border border-gray-600 rounded-xl flex flex-col gap-8 '>
            <div className=' flex items-start gap-3 '>
                <img src={logo} alt="" />

                <div>
                    <div className=' text-xl font-bold text-white'>
                        {name}
                    </div>
                    <div className=' text-gray-400'>
                        {description}
                    </div>
                </div>
            </div>

            <div className=' flex justify-between items-center'>
                <div className='py-2 px-5 font-bold bg-black/10 border rounded-full cursor-pointer '>
                    Remove
                </div>
                <input type="checkbox" checked={isActive ?? false} className='toggle checked:bg-red-700 checked:border-red-700' />
            </div>
        </div>
    )
}
