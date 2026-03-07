import React from 'react'
import Theme from './Components/Theme'
import Button from './Components/Button'
import Card from './Components/Card'

export default function App() {

    const cardDetails = [
        {
            image: 'react.svg', 
            name: 'DevLens', 
            content: 'Quickly inspect page layouts and visualize element boundaries', 
        },
        {
            image: 'react.svg', 
            name: 'DevLens', 
            content: 'Quickly inspect page layouts and visualize element boundaries', 
        },
        {
            image: 'react.svg', 
            name: 'DevLens', 
            content: 'Quickly inspect page layouts and visualize element boundaries', 
        },
        {
            image: 'react.svg', 
            name: 'DevLens', 
            content: 'Quickly inspect page layouts and visualize element boundaries', 
        },
    ]

    return (
        <div className='py-6 min-h-[100dvh] bg-[#060c22]  '>
            <div className=' mx-auto max-w-3xl '>
                {/* Heading (Nav) */}
                <div className=' px-3 sm:px-4 py-1 mx-2 bg-gray-800 rounded-xl flex justify-between items-center'>
                    <div className=' flex items-center gap-3'>
                        <img src="react.svg" alt="" />
                        <div className=' text-xl font-bold text-gray-200 '>
                            Extensions
                        </div>
                    </div>

                    <div className=''>
                        <Theme />
                    </div>
                </div>

                {/* Extension Heading and Buttons */}
                <div className='mt-10'>
                    <div className=' flex flex-col gap-7'>
                        <div className=' text-3xl text-center text-gray-200 font-semibold'>
                            Extension List
                        </div>

                        <div className=' flex justify-evenly'>
                            <Button name={'All'} />
                            <Button name={'Acitve'} />
                            <Button name={'Inactive'} />
                        </div>
                    </div>
                </div>

                {/* Extension list */}
                <div>
                    {cardDetails.map((item, index) => (
                        <Card image={item.image} name={item.name} content={item.content} key={index} />
                    ))}
                </div>
            </div>
        </div>
    )
}
