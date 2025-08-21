import React from 'react'

const Modal = ({
    showModal,
    editingPassword,
    setEditingPassword,
    closeModal,
    handleModalSave
}) => {

    // If the modal is not supposed to be shown, or there's no item to edit, render nothing.
    if (!showModal || !editingPassword) {
        return null;
    }

    return (
        <div onClick={closeModal} className="fixed inset-0 z-50 flex items-center justify-center bg-black/20 backdrop-blur-xs">
            <div className="animate-modal-pop bg-white rounded-2xl shadow-xl p-8 w-full max-w-md mx-4 relative" onClick={e => e.stopPropagation()}>
                <h3 className="text-xl font-bold mb-6 text-gray-800">Edit Password</h3>
                <div className="space-y-4">
                    <div>
                        <label htmlFor="site" className="block text-sm font-medium text-gray-700">Site</label>
                        <input
                            id="site"
                            type="text"
                            value={editingPassword.site}
                            onChange={e => setEditingPassword({ ...editingPassword, site: e.target.value })}
                            className="mt-1 border border-gray-300 p-2 rounded-lg w-full"
                        />
                    </div>
                    <div>
                        <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username</label>
                        <input
                            id="username"
                            type="text"
                            value={editingPassword.username}
                            onChange={e => setEditingPassword({ ...editingPassword, username: e.target.value })}
                            className="mt-1 border border-gray-300 p-2 rounded-lg w-full"
                        />
                    </div>
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                        <input
                            id="password"
                            type="text"
                            value={editingPassword.password}
                            onChange={e => setEditingPassword({ ...editingPassword, password: e.target.value })}
                            className="mt-1 border border-gray-300 p-2 rounded-lg w-full"
                        />
                    </div>
                </div>
                <div className="flex mt-6 justify-end gap-2">
                    <button
                        onClick={closeModal}
                        className="px-4 py-2 bg-gray-300 rounded-lg hover:bg-gray-500 hover:text-white hover:scale-105 active:scale-95 transition-all duration-200 shadow-md">
                        Cancel
                    </button>
                    <button
                        onClick={handleModalSave}
                        className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700 hover:scale-105 active:scale-95 transition-all duration-200 shadow-md">
                        Save
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Modal