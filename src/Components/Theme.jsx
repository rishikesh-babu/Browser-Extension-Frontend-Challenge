import React from 'react'
import sun from '/assets/images/icons/icon-sun.svg'
import moon from '/assets/images/icons/icon-moon.svg'

export default function Theme() {
    return (
        <label className="swap swap-rotate">
            {/* this hidden checkbox controls the state */}
            <input type="checkbox" className="theme-controller" value="synthwave" />

            {/* sun icon */}
            <img src={sun} className='swap-off h-10 w-10 fill-current' alt="" />

            {/* moon icon */}
           <img src={moon} className='swap-on h-10 w-10 fill-current' alt="" />
        </label>
    )
}
