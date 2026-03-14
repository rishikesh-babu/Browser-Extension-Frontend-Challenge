import React from 'react'

export default function Card({ logo, name, description, isActive, toggleData, id, value, removeExtension }) {
    return (
        <div className={`p-3 bg-gray-800 border border-gray-600 rounded-xl flex flex-col gap-8 ${value === 'active' && isActive === false ? 'hidden' : value === 'inactive' && isActive === true ? 'hidden' : 'block'} `}>
            <div className=" flex items-start gap-3 ">
                <img src={logo} alt="" />

                <div>
                    <div className=" text-xl font-bold text-white">{name}</div>
                    <div className=" text-gray-400">{description}</div>
                </div>
            </div>

            <div className=" flex justify-between items-center">
                <button onClick={() => removeExtension(id)} className="py-2 px-5 font-bold hover:text-gray-300 bg-black/10 hover:bg-gray-700 border border-gray-500 hover:border-gray-700 rounded-full cursor-pointer duration-300  ">
                    Remove
                </button>
                <input
                    type="checkbox"
                    checked={isActive ?? false}
                    onChange={() => toggleData(id)}
                    className="toggle checked:bg-red-700 checked:border-red-700"
                />
            </div>
        </div>
    );
}
