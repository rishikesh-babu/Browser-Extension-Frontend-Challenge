import React, { useState } from 'react'
import Theme from './Components/Theme'
import Button from './Components/Button'
import logo from '/assets/images/icons/logo.svg'
import Card from './Components/Card'
import { data } from './data/data'

export default function App() {
    const [filteredData, setFilteredData] = useState(data)

    function toggleData(index) {
        const updatedData = filteredData.map((item, i) => (i === index ? { ...item, isActive: !item.isActive } : item))
        setFilteredData(updatedData)
    }

    function handleData() { 
        // const updateData = filteredData.map((item, index) => ())
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

                        <div className=" flex justify-evenly sm:gap-5">
                            <Button  name={"All"} />
                            <Button  name={"Acitve"} />
                            <Button  name={"Inactive"} />
                        </div>
                    </div>
                </div>

                {/* Extension list */}
                <div className="my-10 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-3 ">
                    {filteredData.map((item, index) => (
                        <Card
                            name={item.name}
                            description={item.description}
                            logo={item.logo}
                            isActive={item.isActive}
                            index={index}
                            toggleData={toggleData}
                            key={index}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
