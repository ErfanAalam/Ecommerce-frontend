import React, { useContext, useEffect, useState } from 'react'
import { userContext } from '../../AppWrapper'

const Login = () => {

  const { handleSubmit } = useContext(userContext)

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setpassword] = useState("")


  return (
    <div className='flex justify-center mt-20'>
      <form action="" method='post' onSubmit={(e) => handleSubmit(e, name, email, password)} encType="multipart/form-data" className='text-white border-2 h-[500px] flex flex-col justify-between border-[#B6C7AA] p-10 bg-[#B6C7AA] rounded-lg shadow-black shadow-2xl'>
        <h1 className='text-white text-center text-2xl'>Register New your account</h1>
        <div>
          <div className='flex flex-col mb-6'>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="name" value={name} placeholder='Enter Your name' onChange={(e) => setName(e.target.value)}
              className="p-3 rounded-lg border text-black border-[#BB9AB1] focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent" />
          </div>

          <div className='flex flex-col mb-6'>
            <label htmlFor="email">Email</label>
            <input type="text" name="Email" id="email" value={email} placeholder='Enter your name' onChange={(e) => setEmail(e.target.value)}
              className="p-3 rounded-lg border text-black border-[#BB9AB1] focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent" />
          </div>

          <div className='flex flex-col mb-6'>
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password" value={password} placeholder='Enter your passsword' onChange={(e) => setpassword(e.target.value)} className="p-3 rounded-lg text-black border border-[#BB9AB1] focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent" />
          </div>
        </div>

        <div className="flex justify-between items-center">
          <button type="submit" className="bg-white text-[#BB9AB1] font-semibold py-2 px-4 rounded-lg hover:bg-gray-200 transition duration-300">
            Register
          </button>
          <a href="/signup" className="text-white underline hover:text-gray-200 transition duration-300">
            Log In Here
          </a>
        </div>
      </form>
    </div>
  )
}

export default Login



