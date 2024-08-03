import React, { useContext, useState } from 'react'
import { userContext } from '../AppWrapper'
import Color from './Utils/Color'

const Address = () => {

    const { handleSetAddress } = useContext(userContext)

    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const [address, SetAddress] = useState("")
    const [country, Setcountry] = useState("")
    const [state, setState] = useState("")
    const [city, setCity] = useState("")
    const [zip, SetZip] = useState("")

    function handleAddress(e) {
        e.preventDefault()

        let obj = {
            name,
            phone,
            address,
            country,
            state,
            city,
            zip
        }

        handleSetAddress(e, obj)

        setName("")
        setPhone("")
        SetAddress("")
        Setcountry("")
        setState("")
        setCity("")
        SetZip("")
    }

    return (
        <div className='p-10'>
            <h1 className='text-2xl text-center py-4'> Enter Your Address and details for process order</h1>
            <form action="" className='flex flex-col gap-4 p-10 w-96 m-auto bg-[#B7C9F2] rounded-md' onSubmit={(e) => handleAddress(e)}>
                <h1 className='text-center text-2xl'>Your Address</h1>
                <div className='flex flex-col'>
                    <label htmlFor="name">Enter your name</label>
                    <input className='rounded-md' type="text" id='name' value={name} onChange={(e) => setName(e.target.value)} required />
                </div>
                <div className='flex flex-col'>
                    <label htmlFor="phone">Enter your phone</label>
                    <input className='rounded-md' type="text" id='phone' value={phone} onChange={(e) => setPhone(e.target.value)}  required />
                </div>
                <div className='flex flex-col'>
                    <label htmlFor="address">Enter your address</label>
                    <textarea type="text" id='address' className='rounded-md' value={address} onChange={(e) => SetAddress(e.target.value)}  required />
                </div>
                <div className='flex gap-6'>
                    <div className='flex flex-col w-[45%] '>
                        <label htmlFor="country">Enter your country</label>
                        <input className='rounded-md' type="text" id='country' value={country} onChange={(e) => Setcountry(e.target.value)}  required />
                    </div>
                    <div className='flex flex-col w-[45%]'>
                        <label htmlFor="state">Enter your state</label>
                        <input className='rounded-md' type="text" id='state' value={state} onChange={(e) => setState(e.target.value)}  required />
                    </div>
                </div>
               <div className="flex gap-6">
               <div className='flex flex-col w-[45%]'>
                    <label htmlFor="city">Enter your city</label>
                    <input className='rounded-md' type="text" id='city' value={city} onChange={(e) => setCity(e.target.value)}  required />
                </div>
                <div className='flex flex-col w-[45%]'>
                    <label htmlFor="zip">Enter your zip</label>
                    <input className='rounded-md' type="text" id='zip' value={zip} onChange={(e) => SetZip(e.target.value)}  required />
                </div>
               </div>

                <button type='submit' className='rounded-lg p-2 text-white' style={{backgroundColor:Color.button}}>Confirm</button>

            </form>
        </div>
    )
}

export default Address
