import React, { useContext, useState } from 'react'
import { userContext } from '../../AppWrapper'
import Color from '../Utils/Color'


const Signup = () => {

  const { handleLogin } = useContext(userContext)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")


  return (
    <div className='flex justify-center items-center m-10'>
    <form onSubmit={(e) => handleLogin(e, email, password)} className='border-2 h-[500px] flex flex-col justify-between border-[#B6C7AA] p-10 bg-[#B7C9F2] rounded-lg shadow-black shadow-xl'>
      <h1 className=' text-center text-3xl'>Sign In your account</h1>
     <div className='flex flex-col '>
     <div className="flex flex-col mb-6 ">
        <label htmlFor="email" className=" text-lg mb-2">Enter your Email</label>
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="p-3 rounded-lg border border-[#BB9AB1] focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent"
        />
      </div>
      <div className='flex flex-col mb-6'>
        <label htmlFor="password" className=" text-lg mb-2">Enter your Password</label>
        <input
          type="password"
          placeholder="Password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="p-3 rounded-lg border border-[#BB9AB1] focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent"
        />
      </div>
     </div>
      <div className="flex justify-between items-center">
        <button type="submit" className="text-white font-semibold py-2 px-4 rounded-lg hover:bg-gray-200 transition duration-300" style={{backgroundColor:Color.button}}>
          Sign Up
        </button>
        <a href="/login" className=" underline text-gray-500 hover:text-gray-900 transition duration-300">
          Create new Account
        </a>
      </div>
    </form>
  </div>
  )
}

export default Signup
