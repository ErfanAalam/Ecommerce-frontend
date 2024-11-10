import React, { createContext, useEffect, useState } from 'react'
import App from './App.jsx'
import './index.css'
import { Routes, Route, useNavigate } from 'react-router-dom'
import Products from './Components/Products.jsx'
import Blog from './Components/Blog.jsx'
import About from './Components/About.jsx'
import Contact from './Components/Contact.jsx'
import Login from './Components/Authentications/Login.jsx'
import Signup from './Components/Authentications/Signup.jsx'
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { signInWithEmailAndPassword, getAuth } from 'firebase/auth'
import { auth, logout } from './firebase.js'
import Admin from './Components/Admin/Admin.jsx'
import ProductDetails from './Components/ProductDetails.jsx'
import Cart from './Components/Cart.jsx'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LogoutIcon from '@mui/icons-material/Logout';
import Color from './Components/Utils/Color.js'
import Address from './Components/Address.jsx'
import NotAdmin from './Components/NotAdmin.jsx'

export const userContext = createContext()

const AppWrapper = () => {

    let adminUid = "5uvfKoBGLBRxrXr9dvp531aLAy13"


    const navigate = useNavigate()

    const [user, setUser] = useState(null)

    const [cartItem, setCartItem] = useState([])


    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            if (user) {
                setUser({
                    uid: user.uid,
                    email: user.email,
                    displayName: user.displayName
                });
            } else {
                setUser(null);
            }
        });


        return () => unsubscribe();
    }, []);


    useEffect(() => {
        if (user) {
            fetch("http://localhost:3000/getCart")
                .then((response) => {
                    return response.json();
                })
                .then((result) => {
                    const cart = result.filter((data) => {
                        return data.userId == user.uid;
                    });
                    setCartItem(cart[0].items);

                });
        }
    }, [user, cartItem]);


    const handleLogout = async () => {
        try {
            await logout()
        } catch (error) {
            console.error('Error logging out', error);
        }
    };


    async function handleSubmit(e, name, email, password) {
        e.preventDefault();
        const userCrendentials = await createUserWithEmailAndPassword(
            auth,
            email,
            password
        );
        await updateProfile(userCrendentials.user, { displayName: name })
        navigate("/signup")
    }

    function handleLogin(e, email, password) {
        e.preventDefault()

        const auth = getAuth()

        signInWithEmailAndPassword(auth, email, password)
            .then((userCrendentials) => {
                const user = userCrendentials.user
                console.log(userCrendentials);
                alert("Succesfully login")
                if (user.uid == adminUid) {
                    navigate("/admin/erfan")
                } else {
                    navigate("/")
                }
                const username = user.displayName
                return user
            })
            .catch((error) => {
                alert("Invalid email or password");
                console.error("Error code:", error.code);
                console.error("Error message:", error.message);

                // switch (error.code) {
                //     case 'auth/user-not-found':
                //         alert("No user found with this email.");
                //         break;
                //     case 'auth/wrong-password':
                //         alert("Incorrect password.");
                //         break;
                //     default:
                //         alert("An unexpected error occurred. Please try again.");
                // }
            })
    }

    function handleAddproduct(e, productdata) {
        console.log(productdata);
        e.preventDefault()

        fetch("http://localhost:3000/addProduct", {

            method: "POST",
            headers: {
                "content-type": "application/json"
            },

            body: JSON.stringify(productdata)

        }).then((response) => {
            return response.json()

        }).then((result) => {
            console.log(result);
            alert("product submitter succesfully")
        })
    }


    async function HandleAddToCart(e, product) {
        e.preventDefault()


        let obj = {
            userId: user.uid,
            product
        }


        const response = await fetch("http://localhost:3000/addToCart", {
            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify(obj)
        })

        const data = await response.json();
    }

    function isAddToCart(id) {
        const isProductAdded = cartItem.find((addedproduct) => { return addedproduct.id === id })

        if (isProductAdded) {
            return true
        } else {
            return false
        }
    }

    function HandleRemoveFromCart(e, id) {
        e.preventDefault()
        let obj = {
            userId: user.uid,
            prodId: id
        }

        fetch("http://localhost:3000/removeFromCart", {
            method: "DELETE",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify(obj)
        }).then((response) => {
            return response.json()
        })

    }

    function handleClearCart(userId) {

        fetch("http://localhost:3000/removeCart", {
            method: "DELETE",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({ userId })
        }).then((response) => {
            return response.json()
        })

    }

    function handleSetAddress(e, address) {
        e.preventDefault();

        let data = {
            address,
            userId: user.uid,
            userEmail: user.email
        };

        fetch("http://localhost:3000/setAddress", {
            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify(data)
        })
            .then((response) => {
                return response.json()
            })
            .then((result) => {
                // console.log(result);
                if (result == "address succesfully added") {
                    alert("Order Confirmed succesfully")
                    navigate("/")
                    handleClearCart(user.uid)
                }
            })
    }

    // console.log(Color.primary);

    return (
        <userContext.Provider value={{ handleSubmit, handleLogin, handleAddproduct, HandleAddToCart, isAddToCart, HandleRemoveFromCart, cartItem, handleSetAddress }}>
            <div className={`h-20 px-10 text-white flex justify-between items-center sticky top-0 z-50`} style={{ backgroundColor: Color.primary }}>
                <a href="/"><h1 className='text-3xl  font-bold mt-4'>ClothHub</h1></a>
                <ul className='text-xl flex gap-10 '>

                    {
                        user !== null ?
                            <div className='flex gap-2 '>
                                <li className='hidden md:block'>Welcome {user.displayName}</li>
                                <a href="/signup" onClick={handleLogout}><li><LogoutIcon /></li></a>
                            </div>
                            :
                            <div className='flex'>
                                <a className='li' href="/signup"><li>Login</li></a>
                            </div>
                    }
                    <div className='relative w-8'>
                        <a href="/cart"><li><ShoppingCartIcon /></li></a>
                        <p className='absolute top-[-1rem] right-0 text-center w-6 h-6 rounded-full pt-[2px] bg-gray-500'>{cartItem.length}</p>
                    </div>
                </ul>
            </div>
            <div className={`h-10 border-t-2 border-black hidden md:flex items-center justify-center px-10 bg-[${Color.secondary}]`} style={{ backgroundColor: Color.secondary }}>
                <ul className='text-lg flex justify-evenly items-center w-full'>
                    <a className='li' href="/"><li>Home</li></a>
                    <a className='li' href="/products"><li>Products</li></a>
                    <a className='li' href="/blog"> <li>Blog</li></a>
                    <a className='li' href="/about"><li>About us</li></a>
                    <a className='li' href="/contact"><li>Contact us</li></a>
                </ul>
            </div>

            <Routes>
                <Route path='/' element={<App />} />
                <Route path='/products' element={<Products />} />
                <Route path='/product/:id' element={<ProductDetails />} />
                <Route path='/blog' element={<Blog />} />
                <Route path='/about' element={<About />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/login' element={<Login />} />
                <Route path='/signup' element={<Signup />} />
                <Route path='/admin' element={<Signup />} />
                <Route path='/cart' element={<Cart />} />
                <Route path='/admin/erfan' element={user?.uid === adminUid ? <Admin /> : <NotAdmin />} />
                <Route path='/address' element={<Address />} />
            </Routes>
        </userContext.Provider>
    )
}

export default AppWrapper
