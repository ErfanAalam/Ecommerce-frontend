import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { userContext } from '../AppWrapper'
import { Link } from 'react-router-dom'

const ProductDetails = () => {

    const { isAddToCart, HandleAddToCart, HandleRemoveFromCart } = useContext(userContext)

    const { id } = useParams()

    const [product, setProduct] = useState({})

    useEffect(() => {
        fetch("http://localhost:3000/getProducts/" + id)
            .then((response) => {
                return response.json()
            }).then((result) => {
                console.log(result);
                setProduct(result)
            })
    }, [])

    return (
        <div>
            <div className='p-10 m-20 text-center w-[90%] h-96 bg-[#B6C7AA] rounded-lg shadow-md shadow-black flex  items-center gap-40'>
                <div className='w-[350px] h-[280px] flex justify-center '>
                    <img src={product.file} alt="oops" width={"450px"} className='mix-blend-multiply' />
                </div>
                <div className='flex flex-col gap-10 items-start'>
                    <h1>Title :{product.title}</h1>
                    <h1> Price: ₹{product.price}</h1>
                    <p>Desc : {product.desc}</p>
                    <p>Category : {product.category}</p>
                    <h3 className='rounded-lg p-2 bg-[#55585b]'>
                        {isAddToCart(product.id) ?
                            <Link
                                className='cart'
                                onClick={(e) => HandleRemoveFromCart(e, product.id)}
                            > Remove From the cart
                            </Link>
                            :

                            <Link
                                className='cart'
                                onClick={(e) => HandleAddToCart(e, product)}
                            > Add to Cart
                            </Link>
                        }
                    </h3>
                </div>
            </div>
        </div>
    )
}



export default ProductDetails
