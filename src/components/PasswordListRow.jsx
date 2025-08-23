
import React, { useState } from 'react';
import visibleIcon from '../assets/visible.png';
import closeEyeIcon from '../assets/close-eye.png';


const PasswordListRow = (props) => {
  const [showPass, setshowPass] = useState(false)
  return (
    <div className="grid grid-cols-4 justify-items-center px-6 py-4 bg-white/80 border-b border-gray-200 hover:bg-blue-50 transition group text-base md:text-lg">
      <span className="font-semibold text-gray-800 truncate text-base md:text-lg">{props.site}</span>
      <span className="text-gray-500 truncate text-sm md:text-base">{props.username}</span>

      <div className="flex items-center justify-center">
        {showPass ? (
          <span className="text-gray-700 font-mono tracking-wider truncate md:text-lg">
            {props.password}
          </span>
        ) : (
          <span className="text-gray-700 font-mono tracking-wider truncate md:text-lg">
            {'*'.repeat(props.password.length)}
          </span>
        )}
        <button onClick={() => setshowPass(!showPass)} className="ml-2 p-1 rounded-full hover:bg-gray-200 transition">
          <img src={showPass ? visibleIcon : closeEyeIcon} alt={showPass ? "Hide password" : "Show password"} className="w-6 h-6" />
        </button>
      </div>

      <div className="flex gap-2 justify-end">
        <button onClick={() => props.onEdit(props.id)} className="px-3 py-1 rounded-lg bg-blue-600 text-white text-xs md:text-sm font-semibold hover:bg-blue-700 transition"><lord-icon
          src="https://cdn.lordicon.com/gwlusjdu.json"
          trigger="hover" className="w-[28px] h-[28px]">
        </lord-icon></button>
        <button onClick={() => props.onDelete(props.id)} className="px-3 py-1 rounded-lg bg-red-600 text-white text-xs md:text-sm font-semibold hover:bg-red-700 transition flex items-center"><lord-icon
          src="https://cdn.lordicon.com/xyfswyxf.json"
          trigger="hover" className="w-[28px] h-[28px]">
        </lord-icon></button>
      </div>
    </div>
  );
};

export default PasswordListRow;
