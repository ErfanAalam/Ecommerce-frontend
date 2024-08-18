import React, { useContext } from 'react'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { userContext } from '../AppWrapper'
import { colors } from '@mui/material'
import Color from './Utils/Color'

const Products = () => {

  const [prodcuts, setproducts] = useState([])

  const { isAddToCart, HandleAddToCart, HandleRemoveFromCart } = useContext(userContext)

  useEffect(() => {
    fetch("http://localhost:3000/getProducts")
      .then((response) => {
        return response.json()
      }).then((result) => {
        setproducts(result)
      })

  }, [])


  return (
    <>
      <h1 className='text-center  p-10 text-5xl text-[#1b1a1a] font-semibold'>Featured produts</h1>
      <div className='container py-10 p-10 flex justify-center gap-10 items-center flex-wrap'>
        {
          prodcuts.map((product, index) => {
            return  <div key={index} className={`p-10 text-center h-[450px] w-[300px] rounded-lg shadow-md shadow-black flex flex-col items-center gap-6`} style={{backgroundColor:Color.cards}}>
                <div className='w-[220px] h-[200px] overflow-hidden flex justify-center '>
                  <Link to={`/product/${product.id}`} >
                    <img src={product.file} alt="oops" className='mix-blend-multiply' />
                  </Link>
                </div>
                <h1>Title :{product.title}</h1>
                <h1> Price: ₹{product.price}</h1>
                <h3 className='rounded-lg p-2 text-white' style={{backgroundColor:Color.button}}>
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
          })
        }
      </div>
    </>
  )
}

export default Products
