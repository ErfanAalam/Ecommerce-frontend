import React, { useContext, useState } from 'react'
import { userContext } from '../../AppWrapper'
import Color from '../Utils/Color'




const Admin = () => {
    const [id, setId] = useState("")
    const [file, setFile] = useState("")
    const [title, setTitle] = useState("")
    const [desc, setDesc] = useState("")
    const [price, setPrice] = useState("")

    const { handleAddproduct } = useContext(userContext)


   async function handleUpload(e) {
        e.preventDefault()

        const formdata = new FormData()

        formdata.append("file", file)
        formdata.append("upload_preset", "erfanaalam")

        const response = await fetch("https://api.cloudinary.com/v1_1/erfanaalam/image/upload", {

            method: "POST",
            body: formdata

        })

            const result = await response.json()
          
            let url = result.secure_url


            const productData = {
                id,
                file: url,
                title,
                desc,
                price
            };


            handleAddproduct(e,productData)

            setId("")
            setTitle("")
            setDesc("")
            setPrice("")
    }


    return (
        <div className='my-4 flex flex-col items-center'>
            <form action="" onSubmit={(e) => handleUpload(e)} method='POST' encType='multipart/form-data' className=' border-2  flex flex-col justify-between border-[#B6C7AA] p-10 bg-[#B7C9F2] rounded-lg shadow-black shadow-xl'>
                <h1 className=' text-center text-4xl'>Add Product</h1>
                <div className='mt-4'>

                    <div className='flex flex-col mb-6'>
                        <label htmlFor="image">Enter id of product</label>
                        <input type="text" name="" id=""
                            className="p-3 rounded-lg border text-black border-[#BB9AB1] focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent"
                            value={id}
                            onChange={(e) => setId(e.target.value)} />

                    </div>

                    <div className='flex flex-col mb-6'>
                        <label htmlFor="image">Enter image of product</label>
                        <input type="file" name="" id="" onChange={(e) => setFile(e.target.files[0])} />

                    </div>
                    <div className='flex flex-col mb-6'>
                        <label htmlFor="title">Title of product</label>
                        <input type="text" id='title'
                            className="p-3 rounded-lg border text-black border-[#BB9AB1] focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)} />
                    </div>
                    <div className='flex flex-col mb-6'>
                        <label htmlFor="desc">Description of product</label>
                        <input type="text" id='desc'
                            className="p-3 rounded-lg border text-black border-[#BB9AB1] focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent"
                            value={desc}
                            onChange={(e) => setDesc(e.target.value)} />
                    </div>
                    <div className='flex flex-col mb-6'>
                        <label htmlFor="price">Price of product</label>
                        <input type="text" name="" id="price"
                            className="p-3 rounded-lg border text-black border-[#BB9AB1] focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent"
                            value={price}
                            onChange={(e) => setPrice(e.target.value)} />
                    </div>
                </div>
                <div className='flex justify-center'><button type='submit' className='p-2 w-32 text-xl text-white rounded-lg' style={{backgroundColor:Color.button}}>Submit</button></div>
            </form>
        </div>
    )
}

export default Admin
