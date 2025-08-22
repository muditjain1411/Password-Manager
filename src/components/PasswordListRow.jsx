import React from 'react';

const PasswordListRow = (props) => {
  return (
    <div className="flex items-center justify-between px-6 py-4 bg-white/80 border-b border-gray-200 hover:bg-blue-50 transition group">
      <div className="flex flex-col sm:flex-row sm:items-center gap-2 w-1/2 min-w-0">
        <span className="font-semibold text-gray-800 truncate w-32">{props.site}</span>
        <span className="text-gray-500 text-sm truncate w-40">{props.username}</span>
      </div>
      <div className="flex items-center gap-2 w-1/4">
        <span className="text-gray-700 font-mono tracking-wider">{props.password}</span>

      </div>
      <div className="flex gap-2 w-1/4 justify-end">
        <button onClick={() => props.onEdit(props.id)} className="px-3 py-1 rounded-lg bg-blue-600 text-white text-xs font-semibold hover:bg-blue-700 transition">Edit</button>
        <button onClick={() => props.onDelete(props.id)} className="px-3 py-1 rounded-lg bg-red-600 text-white text-xs font-semibold hover:bg-red-700 transition">Delete</button>
      </div>
    </div>
  );
};

export default PasswordListRow;
