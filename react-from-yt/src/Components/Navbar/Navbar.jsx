import React from 'react'
import Button from './Button.jsx'



const Navbar = () => {
    return (
        <nav className="flex items-center justify-between px-4 py-3">
            <div className='text-white'>
                <Button text="TAREGT AUDIENCE" bg="black" />
            </div>

            <div className='text-black'>
                <Button text="DIGITAL BANKING PLATFORM" bg="gray" />
            </div>
        </nav>
    );
};

export default Navbar;