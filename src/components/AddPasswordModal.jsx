import React, { useState } from 'react';

const AddPasswordModal = ({ showModal, setShowModal, addPassword }) => {
    const [site, setSite] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    if (!showModal) {
        return null;
    }

    const handleSave = (e) => {
        e.preventDefault();
        if (!site || !username || !password) {
            document.getElementById('error').classList.remove('hidden');
            return;
        }
        addPassword({ site, username, password });
        // Clear fields after saving
        setSite('');
        setUsername('');
        setPassword('');
    };

    const handleCancel = () => {
        setShowModal(false);
        setSite('');
        setUsername('');
        setPassword('');
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/20 backdrop-blur-xs">
            <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-md">
                <h2 className="text-2xl font-bold mb-4">Add New Password</h2>
                <form onSubmit={handleSave}>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="site">
                            Website
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="site" type="text" placeholder="e.g., google.com" value={site} onChange={(e) => setSite(e.target.value)} />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                            Username/Email
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="e.g., user@example.com" value={username} onChange={(e) => setUsername(e.target.value)} />
                    </div>
                    <div className="mb-2">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                            Password
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="text" placeholder="******************" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <div><p id="error" className="text-red-500 mb-4 text-xs italic hidden">All fields are required!</p></div>
                    <div className="flex items-center justify-end gap-4">
                        <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" onClick={handleCancel}>
                            Cancel
                        </button>
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                            Save Password
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddPasswordModal;
