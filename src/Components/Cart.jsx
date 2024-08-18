import React, { useContext, useEffect, useState } from 'react'
import { userContext } from '../AppWrapper'
import CloseIcon from '@mui/icons-material/Close';
import Color from './Utils/Color';

const Cart = () => {

    const { cartItem, HandleRemoveFromCart, HandleAddToCart } = useContext(userContext)


    // const [quantities, setQuantities] = useState(cartItem.reduce((acc, product) => {
    //     acc[product.id] = 1;
    //     return acc;
    // }, {}));

    // useEffect(() => {
    //     const initialQuantities = cartItem.reduce((acc, product) => {
    //         acc[product.id] = product.quantity || 1;
    //         return acc;
    //     }, {});
    //     setQuantities(initialQuantities);
    // }, [cartItem]);

    function handleDecrement(e, id) {
        e.preventDefault()
        
    }

    // console.log(cartItem);

    function handleIncrement(e, product) {
        e.preventDefault()
        
        product.quantity += 1


        console.log(product.quantity);

    }

    let sum = 0

    cartItem.map((item) => {
        sum += Number(item.price)
    })



    return (<>
        <h1 className='text-center text-2xl font-bold my-4'>
            {
                cartItem.length == 0 ? "Cart is empty" : "Your Cart"
            }

        </h1>
        <div className='flex'>
            <div className='w-[60%]'>
                {
                    cartItem.map((product, index) => {
                        return <div key={index} className={`relative p-10 m-20 text-center h-96 rounded-lg shadow-md shadow-black flex items-center gap-10`} style={{ backgroundColor: Color.cards }}>
                            <div className='w-[350px] h-[280px] flex justify-center '>
                                <img src={product.file} alt="oops" width={"450px"} className='mix-blend-multiply' />
                            </div>
                            <div className='flex flex-col gap-10 items-start text-left'>
                                <h1>Title :{product.title}</h1>
                                <h1> Price: {product.price}</h1>
                                <p>Desc : {product.desc}</p>
                                <div key={product.id} className='flex gap-6'>
                                    <button onClick={(e) => handleDecrement(e, product)}>-</button>
                                    <p>{product.quantity}</p>
                                    <button onClick={(e) => handleIncrement(e, product)}>+</button>
                                </div>
                            </div>
                            <div className='absolute top-6 right-6' onClick={(e) => handleDecrement(e, product.id)}>
                                <CloseIcon />
                            </div>

                        </div>
                    })
                }
            </div>
            <div className='p-10 m-20 w-[30%] h-96 bg-[#151515] text-white flex flex-col justify-between sticky top-24 rounded-lg shadow-md shadow-black '>
                <div className='flex flex-col gap-10'>
                    <p>Total item in cart : {cartItem.length}</p>
                    <p>Total MRP : {sum}</p>
                    {/* <p>Gst tax: {(sum*18)/100} (18%)</p> */}
                    <p>Shipping charge : 199.99</p>
                </div>
                <div className='flex flex-col gap-2'>
                    <hr className='border-black' />
                    <div className='flex justify-evenly items-center'>
                        <p>Sub Total : {sum + 199.99}</p>
                        <a href="/address"><button className='rounded-lg p-2 ' style={{ backgroundColor: Color.button }}>Confirm Order</button></a>
                    </div>
                </div>
            </div>
        </div>
    </>
    )
}

export default Cart


