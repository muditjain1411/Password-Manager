import React from 'react';
import Logo from '../assets/logo.png';
const Navbar = () => {
    const addPass = () => {
        // Logic to add a new password
        console.log("Add Password button clicked");
    };
    return (
        <>
            <div className="flex flex-row justify-between items-center gap-4 px-8 py-3 fixed top-0 left-0 w-full bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 shadow-xl rounded-b-2xl z-50">
                <div className="flex flex-row items-center gap-4">
                    <img src={Logo} className="w-12 h-12 rounded-xl shadow-md" alt="Logo" />
                    <div className="text-3xl font-extrabold font-[cursive] tracking-wide text-white drop-shadow-lg select-none">PASSVAULT</div>
                </div>
                <div className='flex flex-row items-center gap-4 p-2'>
                    <button onClick={addPass} className='bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer' type="button">Add Password</button>
                </div>
            </div>
        </>
    )
}

export default Navbar