import React, { useState } from 'react'
import Theme from './Components/Theme'
import logo from '/assets/images/icons/logo.svg'
import Card from './Components/Card'
import { data } from './data/data'
import Button from './Components/Button'

export default function App() {
    const [filteredData, setFilteredData] = useState(data)
    const [value, setValue] = useState('all')

    function toggleData(id) {
        const updatedData = filteredData.map(item => item.id === id ? { ...item, isActive: !item.isActive } : item)
        setFilteredData(updatedData)
    }

    return (
        <div className="px-1 sm:px-3 py-6 min-h-[100dvh] bg-[#060c22]  ">
            <div className="mx-auto max-w-6xl ">
                {/* Heading (Nav) */}
                <div className=" px-3 sm:px-4 py-1 bg-gray-700 rounded-xl flex justify-between items-center">
                    <img src={logo} alt="logo" />

                    <div className="">
                        <Theme />
                    </div>
                </div>

                {/* Extension Heading and Buttons */}
                <div className="mt-10">
                    <div className=" flex flex-col sm:flex-row sm:justify-between sm:items-center gap-7">
                        <div className=" text-3xl text-center text-gray-200 font-semibold">
                            Extension List 
                        </div>

                        <select name="extension" id="exten" className='hidden'>
                            <option value="all" selected >All</option>
                            <option value="active">Active</option>
                            <option value="inactive">Inactive</option>
                        </select>

                        <div className=" flex justify-evenly sm:gap-5">
                            <Button name={'All'} value={'all'} setValue={setValue} selected={value} />
                            <Button name={'Active'} value={'active'} setValue={setValue} selected={value} />
                            <Button name={'Inactive'} value={'inactive'} setValue={setValue} selected={value} />
                        </div>
                    </div>
                </div>

                {/* Extension list */}
                <div className="my-10 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-3 ">
                    {filteredData.map((item) => (
                        <Card
                            name={item.name}
                            description={item.description}
                            logo={item.logo}
                            isActive={item.isActive}
                            id={item.id}
                            toggleData={toggleData}
                            value={value}
                            key={item.id}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
