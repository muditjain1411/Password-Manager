import { useState, useEffect } from 'react'
import Navbar from './components/Navbar.jsx'
import PasswordListRow from './components/PasswordListRow.jsx';

function App() {


  const [passwords, setPasswords] = useState(() => {
    const saved = localStorage.getItem('passwords');
    return saved ? JSON.parse(saved) : []
  });

  useEffect(() => {
    localStorage.setItem('passwords', JSON.stringify(passwords));
  }, [passwords])


  return (
    <>
      <Navbar />
      <div className='bg-amber-50 min-h-[90vh] flex flex-col items-center p-4 m-auto'>
        <input type="text" id='search' placeholder='Search' className='border border-gray-300 rounded-md p-2 w-[90%] max-w-md' />
        <div className='w-full max-w-4xl mt-4'>
          <h1 className='text-2xl font-bold mt-8'>Your Passwords</h1>
          <div className="mt-8 w-full rounded-xl overflow-hidden shadow-lg bg-white/90">
            {/* Headings */}
            <div className="flex items-center justify-between px-6 py-3 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 text-white">
              <span className="font-bold w-1/3">Site</span>
              <span className="font-bold w-1/4">Username</span>
              <span className="font-bold w-1/4">Password</span>
              <span className="font-bold w-1/6 text-right">Actions</span>
            </div>
            
            {/* Password list*/}
            {passwords.length === 0 && <div className='p-4 text-center'>No passwords to show.</div>}
            {passwords.map((item) => (
              <PasswordListRow key={item.id} site={item.site} username={item.username} password={item.password} />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default App
