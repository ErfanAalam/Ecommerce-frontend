import { useContext, useEffect, useState } from 'react'
import './App.css'
import slides from './Slider'
import { Link } from 'react-router-dom'
import { userContext } from './AppWrapper'
import ImageSlider from './Components/ImageSlider'
import Color from './Components/Utils/Color'

function App() {

  const [prodcuts, setproducts] = useState([])
  // const [count,setCount] = useState(0)

  const { isAddToCart, HandleAddToCart, HandleRemoveFromCart } = useContext(userContext)

  useEffect(() => {
    fetch("http://localhost:3000/getProducts")
      .then((response) => {
        return response.json()
      }).then((result) => {
        setproducts(result)
        // console.log(result);
      })

  }, [])



  return (
    <div className='p-20'>
      <div className='p-0'>
        <ImageSlider images={slides} />
      </div>
      <div className='container py-10 p-2 flex justify-between gap-10 items-center flex-wrap'>
        {
          prodcuts.map((product, index) => {
            return <div key={index} className={`p-10 text-center bg-[${Color.cards}] rounded-lg shadow-md shadow-black flex flex-col items-center gap-6`}>
              <div className='w-[220px] h-[200px] overflow-hidden flex justify-center '>
                <Link to={`/product/${product.id}`} >
                  <img src={product.file} alt="oops" className='mix-blend-multiply w-full' />
                </Link>
              </div>
              <h1>Title :{product.title}</h1>
              <h1> Price: ₹{product.price}</h1>
              <h3 className='rounded-lg p-2 bg-[#55585b]'>
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
