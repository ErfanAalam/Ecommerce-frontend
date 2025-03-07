import { useContext, useEffect, useState } from 'react'
import './App.css'
import slides from './Slider'
import { Link } from 'react-router-dom'
import { userContext } from './AppWrapper'
import ImageSlider from './Components/ImageSlider'
import Color from './Components/Utils/Color'

function App() {

  const [prodcuts, setproducts] = useState([])

  const { isAddToCart, HandleAddToCart, HandleRemoveFromCart } = useContext(userContext)

  useEffect(() => {
    fetch("https://ecommerce-backend-7hot.onrender.com/getProducts")
      .then((response) => {
        return response.json()
      }).then((result) => {
        setproducts(result)
      })

  }, [])



  return (
    <div className='p-4 md:p-20'>
      <div className=''>
        <ImageSlider images={slides} />
      </div>
      <div className='container py-10 p-2 flex justify-between gap-10 items-center overflow-auto min-w-[300px] no-scrollbar'>
        {
          prodcuts.map((product, index) => {
            return <div key={index} className={`p-8 text-center h-[450px] rounded-lg shadow-md shadow-black flex flex-col items-center gap-6`} style={{ backgroundColor: Color.cards }}>
              <div className='w-[220px] h-[200px] overflow-hidden flex justify-center '>
                <Link to={`/product/${product.id}`} >
                  <img src={product.file} alt="oops" className='mix-blend-multiply w-full' />
                </Link>
              </div>
              <h1>Title :{product.title}</h1>
              <h1>Price: ₹{product.price}</h1>
              <h1>Category : {product.category}</h1>
              <h3 className='rounded-lg p-2 text-white' style={{ backgroundColor: Color.button }}>
                {
                  isAddToCart(product.id) ?
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
    </div>
  )
}

export default App
