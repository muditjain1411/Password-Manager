import { useState, useEffect, useCallback } from 'react'
import Navbar from './components/Navbar.jsx'
import PasswordListRow from './components/PasswordListRow.jsx';
import AddPasswordModal from './components/AddPasswordModal.jsx';
import EditPasswordModal from './components/EditPasswordModal.jsx';
import { v4 as uuidv4 } from 'uuid';

function App() {


  const [passwords, setPasswords] = useState(() => {
    try {
      const saved = localStorage.getItem('passwords');
      return saved ? JSON.parse(saved) : []
    } catch (error) {
      console.error("Failed to parse passwords from localStorage", error);
      return [];
    }
  });

  const [showModal, setShowModal] = useState(false);
  const [editingPassword, setEditingPassword] = useState(null);

  useEffect(() => {
    localStorage.setItem('passwords', JSON.stringify(passwords));
  }, [passwords])

  const addPassword = useCallback((newPassword) => {
    const passwordWithId = { ...newPassword, id: uuidv4() };
    setPasswords(prevPasswords => [...prevPasswords, passwordWithId]);
    setShowModal(false); // Close modal on save
  }, []);

  const handleEdit = useCallback((password) => {
    setEditingPassword(password);
  }, []);

  const handleDelete = useCallback((id) => {
    if (window.confirm("Are you sure you want to delete this password?")) {
      setPasswords(prevPasswords => prevPasswords.filter(p => p.id !== id));
    }
  }, []);

  const handleUpdatePassword = useCallback(() => {
    if (!editingPassword) return;
    setPasswords(prevPasswords => 
      prevPasswords.map(p => (p.id === editingPassword.id ? editingPassword : p))
    );
    setEditingPassword(null); // Close modal on save
  }, [editingPassword]);

  return (
    <>
      <Navbar setShowModal={setShowModal} />
      <AddPasswordModal showModal={showModal} setShowModal={setShowModal} addPassword={addPassword}/>
      <EditPasswordModal 
        showModal={!!editingPassword} 
        editingPassword={editingPassword}
        setEditingPassword={setEditingPassword}
        closeModal={() => setEditingPassword(null)}
        handleModalSave={handleUpdatePassword} />
      <div className='bg-amber-50 min-h-screen flex flex-col items-center p-4 pt-20 m-auto'>
        <div className='w-full max-w-4xl mt-4'>
          <h1 className='text-2xl font-bold mt-8'>Your Passwords</h1>
          <div className="mt-8 w-full rounded-xl overflow-hidden shadow-lg bg-white/90">
            {/* Headings */}
            <div className="flex items-center justify-evenly px-6 py-3 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 text-white">
              <span className="font-bold w-1/3">Site</span>
              <span className="font-bold">Username</span>
              <span className="font-bold">Password</span>
              <span className="font-bold">Actions</span>
            </div>
            
            {/* Password list*/}
            {passwords.length === 0 && <div className='p-4 text-center'>No passwords to show.</div>}
            {passwords.map((item) => (
              <PasswordListRow
                key={item.id}
                id={item.id}
                site={item.site}
                username={item.username}
                password={item.password}
                onEdit={() => handleEdit(item)}
                onDelete={() => handleDelete(item.id)}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default App
