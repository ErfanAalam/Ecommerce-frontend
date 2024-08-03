import React, { useContext, useState } from 'react'
import { userContext } from '../AppWrapper'

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
            <form action="" className='flex flex-col gap-4 p-10 w-96 m-auto bg-teal-700' onSubmit={(e) => handleAddress(e)}>
                <div className='flex flex-col'>
                    <label htmlFor="name">Enter your name</label>
                    <input type="text" id='name' value={name} onChange={(e) => setName(e.target.value)} required />
                </div>
                <div className='flex flex-col'>
                    <label htmlFor="phone">Enter your phone</label>
                    <input type="text" id='phone' value={phone} onChange={(e) => setPhone(e.target.value)}  />
                </div>
                <div className='flex flex-col'>
                    <label htmlFor="address">Enter your address</label>
                    <textarea type="text" id='address' value={address} onChange={(e) => SetAddress(e.target.value)}  />
                </div>
                <div className='flex flex-col'>
                    <label htmlFor="country">Enter your country</label>
                    <input type="text" id='country' value={country} onChange={(e) => Setcountry(e.target.value)}  />
                </div>
                <div className='flex flex-col'>
                    <label htmlFor="state">Enter your state</label>
                    <input type="text" id='state' value={state} onChange={(e) => setState(e.target.value)}  />
                </div>
                <div className='flex flex-col'>
                    <label htmlFor="city">Enter your city</label>
                    <input type="text" id='city' value={city} onChange={(e) => setCity(e.target.value)}  />
                </div>
                <div className='flex flex-col'>
                    <label htmlFor="zip">Enter your zip</label>
                    <input type="text" id='zip' value={zip} onChange={(e) => SetZip(e.target.value)}  />
                </div>

                <button type='submit' className='rounded-lg p-2 bg-[#55585b]'>Submit</button>

            </form>
        </div>
    )
}

export default Address
