import React from 'react'

export default function Card({ image, name, content }) {
    return (
        <div>
            <img src={image} alt="" />            
            {name ?? ''}
            {content ?? ''}
        </div>
    )
}
