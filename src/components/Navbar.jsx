import React from 'react';
// import logo from '../assets/logo.png';
const Navbar = ({ setShowModal }) => {

    return (
        <>
            <div className="flex flex-row justify-between items-center gap-4 px-8 py-3 fixed top-0 left-0 w-full bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 shadow-xl rounded-b-2xl z-50">
                <div className="flex flex-row items-center gap-4">
                    {/* <img src={logo} className="w-12 h-12 rounded-xl shadow-md" alt="Logo" /> */}
                    <div className="text-3xl font-extrabold font-[cursive] tracking-wide text-white drop-shadow-lg select-none">PASSVAULT</div>
                </div>
                <div className='flex flex-row items-center gap-4 p-2'>
                    <button onClick={() => setShowModal(true)} className='bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer flex items-center gap-2' type="button"><lord-icon
                        src="https://cdn.lordicon.com/efxgwrkc.json"
                        trigger="hover"
                        className="w-[28px] h-[28px]">
                    </lord-icon><span>Add Password</span></button>
                </div>
            </div>
        </>
    )
}

export default Navbar