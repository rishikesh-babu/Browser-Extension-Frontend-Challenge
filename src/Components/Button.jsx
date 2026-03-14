import React from 'react'

export default function Button({ name, value, setValue, selected }) {
    return (
        <label>
            <input type="radio" checked={selected === value} name="filter" value={value ?? ''} className="hidden peer" />
            <span onClick={() => setValue(value)} className="px-4 py-2 font-semibold text-md text-gray-300 bg-gray-700 hover:bg-gray-600 duration-300 border border-gray-500 rounded-full select-none cursor-pointer peer-checked:bg-red-500 peer-checked:border-none peer-checked:text-black peer-checked:outline peer-checked:outline-1 peer-checked:outline-gray-800 peer-checked:ring-2 peer-checked:ring-red-500">
                {name}
            </span>
        </label>
    )
}