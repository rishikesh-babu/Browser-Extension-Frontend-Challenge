import React from 'react'
import Toggle from './Toggle';

export default function Card({ logo, name, description, isActive, toggleData, id, value, removeExtension }) {
    return (
        <div className={`p-3 bg-white dark:bg-gray-800 border dark:border-gray-600 rounded-xl flex flex-col justify-between gap-8 duration-300 ${value === 'active' && isActive === false ? 'hidden' : value === 'inactive' && isActive === true ? 'hidden' : 'block'} `}>
            <div className=" flex items-start gap-3 ">
                <img src={logo} alt="" />

                <div>
                    <div className=" text-xl font-bold dark:text-white">{name}</div>
                    <div className=" text-gray-400">{description}</div>
                </div>
            </div>

            <div className=" flex justify-between items-center">
                <button onClick={() => removeExtension(id)} className="py-2 px-5 font-bold text-gray-800 dark:text-gray-400 dark:hover:text-gray-300  dark:bg-black/10 hover:bg-gray-300 dark:hover:bg-gray-700 border border-gray-300 dark:border-gray-500 hover:border-gray-700 rounded-full cursor-pointer duration-300  ">
                    Remove
                </button>
                {/* <input
                    type="checkbox"
                    checked={isActive ?? false}
                    onChange={() => toggleData(id)}
                    // className="toggle toggle-error "
                    className='  toggle border-gray-700 bg-gray-300 dark:bg-gray-700 checked:bg-red-700 checked:border-red-700 [--tglbg:gray] checked:[--tglbg:black] '
                /> */}
                <Toggle
                    checked={isActive ?? false}
                    toggleData={toggleData}
                    id={id}
                />
            </div>
        </div>
    );
}
