import React, { useContext, useEffect, useState } from 'react'
import { userContext } from '../AppWrapper'
import CloseIcon from '@mui/icons-material/Close';
import Color from './Utils/Color';

const Cart = () => {

    const { cartItem, HandleRemoveFromCart, HandleAddToCart } = useContext(userContext)


    const [quantities, setQuantities] = useState(cartItem.reduce((acc, product) => {
        acc[product.id] = 1;
        return acc;
    }, {}));

    useEffect(() => {
        const initialQuantities = cartItem.reduce((acc, product) => {
            acc[product.id] = product.quantity || 1;
            return acc;
        }, {});
        setQuantities(initialQuantities);
    }, [cartItem]);

    function handleDecrement(e, id) {
        e.preventDefault()
        if (quantities[id] > 1) {
            setQuantities(prevQuantities => ({
                ...prevQuantities,
                [id]: prevQuantities[id] - 1
            }));
            HandleRemoveFromCart(e, id);
        }else {
            // If quantity reaches 0, remove the item from the cart
            setQuantities(prevQuantities => {
                const newQuantities = { ...prevQuantities };
                delete newQuantities[id];
                return newQuantities;
            });
            HandleRemoveFromCart(e, id);
        }
    }

    function handleIncrement(e, product) {
        e.preventDefault()
        setQuantities(prevQuantities => ({
            ...prevQuantities,
            [product.id]: prevQuantities[product.id] + 1
        }));
        HandleAddToCart(e, product);
    }

    let sum = 0

    cartItem.map((item) => {
        sum += Number(item.price)
    })



    return (
        <div className='flex'>
            <div className='w-[60%]'>
                {
                    cartItem.map((product, index) => {
                        return <div key={index} className={`relative p-10 m-20 text-center  h-96 bg-[${Color.cards}] rounded-lg shadow-md shadow-black flex items-center gap-10`}>
                            <div className='w-[350px] h-[280px] flex justify-center '>
                                <img src={product.file} alt="oops" width={"450px"} className='mix-blend-multiply' />
                            </div>
                            <div className='flex flex-col gap-10 items-start text-left'>
                                <h1>Title :{product.title}</h1>
                                <h1> Price: {product.price}</h1>
                                <p>Desc : {product.desc}</p>
                                <div key={product.id} className='flex gap-6'>
                                    <p onClick={(e) => handleDecrement(e, product.id)}>-</p>
                                    <p>{quantities[product.id]}</p>
                                    <p onClick={(e) => handleIncrement(e, product)}>+</p>
                                </div>
                            </div>
                            <div className='absolute top-6 right-6' onClick={(e) => handleDecrement(e, product.id)}>
                                <CloseIcon />
                            </div>

                        </div>
                    })
                }
            </div>
            <div className='p-10 m-20 w-[30%] h-96 bg-[#B6C7AA] flex flex-col justify-between sticky top-24 rounded-lg shadow-md shadow-black '>
                <div className='flex flex-col gap-10'>
                    <p>Total item in cart : {cartItem.length}</p>
                    <p>Total MRP : {sum}</p>
                    {/* <p>Gst tax: {(sum*18)/100} (18%)</p> */}
                    <p>Shipping charge : 199.99</p>
                </div>
                <div className='flex flex-col gap-2'>
                    <hr className='border-black' />
                    {/* <p>Sub Total : {sum + (sum*18)/100 + 209}</p> */}
                    <p>Sub Total : {sum + 199.99}</p>
                </div>
            </div>
        </div>
    )
}

export default Cart

