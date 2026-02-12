import React from 'react'
import Leftside from './Leftside'
import Rightside from './Rightside'
const Maincontent = () => {
    return (
        <secion className='flex gap-10 mt-10 ml-10'>
            <Leftside />
            <Rightside />
        </secion>
    )
}

export default Maincontent