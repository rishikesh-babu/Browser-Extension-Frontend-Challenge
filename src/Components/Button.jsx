import React from 'react'

export default function Button({ name, active }) {
  return (
    <div className={`px-5 py-2 font-mono text-md text-gray-200 ${active ? 'bg-red-500' : 'bg-gray-800'} hover:bg-red-500 rounded-full duration-300 cursor-pointer `}>
      {name}
    </div>
  )
}
