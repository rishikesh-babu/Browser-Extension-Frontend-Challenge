import React from 'react'

export default function Button({ name, active, value, setValue }) {
    return (
        // <button
        //     className={`px-5 py-2 font-mono text-md text-gray-200 ${active ? 'bg-red-500' : 'bg-gray-800'} hover:bg-red-500 rounded-full duration-300 cursor-pointer `}
        //     onClick={() => setValue(value)}
        // >
        //     {name}
        // </button>
        
        <label>
            <input type="radio" name="filter" value={value ?? ''} className="hidden peer" />
            <span className="px-4 py-2 font-semibold text-md text-gray-300 bg-gray-700 hover:bg-gray-600 duration-300 rounded-full select-none cursor-pointer peer-checked:bg-red-500 peer-checked:text-black peer-checked:outline peer-checked:outline-1 peer-checked:outline-gray-800 peer-checked:ring-2 peer-checked:ring-red-500">
                {name}
            </span>
        </label>
    )
}