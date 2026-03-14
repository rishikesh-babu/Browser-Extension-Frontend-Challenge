import React, { useState } from 'react'
import Theme from './Components/Theme'
import logo from '/assets/images/icons/logo.svg'
import Card from './Components/Card'
import { data } from './data/data'
import Button from './Components/Button'

export default function App() {
    const [originalData, setOriginalData] = useState(data)
    const [filteredData, setFilteredData] = useState(originalData)
    const [value, setValue] = useState('all')

    function toggleData(index) {
        const updatedData = filteredData.map((item, i) => (i === index ? { ...item, isActive: !item.isActive } : item))
        setFilteredData(updatedData)
    }

    function handleData(value) {
        console.log('value :>> ', value);
        let updatedData
        if (value === 'All') {
            updatedData = originalData
        } else if (value === 'Active') {
            updatedData = filteredData.map(item => item.isActive)
        } else if (value === 'Inactive') {
            updatedData = filteredData.map(item => !item.isActive)
        }
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
                            {/* <Button name={"All"} setValue={setValue} />
                            <Button name={"Acitve"} setValue={setValue} />
                            <Button name={"Inactive"} setValue={setValue} /> */}

                            <Button name={'All'} value={'all'}  />
                            <Button name={'Active'} value={'active'} />
                            <Button name={'Inactive'} value={'inactive'}  />
                        </div>

                        {/* <div className="flex gap-4">
                            <label>
                                <input type="radio" name="filter" value="all" className="hidden peer" />
                                <span className="px-4 py-2 bg-gray-200 rounded peer-checked:bg-blue-500 peer-checked:text-white">
                                    All
                                </span>
                            </label>

                            <label>
                                <input type="radio" name="filter" value="active" className="hidden peer" />
                                <span className="px-4 py-2 bg-gray-200 rounded peer-checked:bg-blue-500 peer-checked:text-white">
                                    Active
                                </span>
                            </label>

                            <label>
                                <input type="radio" name="filter" value="inactive" className="hidden peer" />
                                <span className="px-4 py-2 bg-gray-200 rounded peer-checked:bg-blue-500 peer-checked:text-white">
                                    Inactive
                                </span>
                            </label>

                        </div> */}
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
