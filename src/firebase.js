import {initializeApp} from 'firebase/app'
import {getAuth} from 'firebase/auth'


const firebaseConfig = {
    apiKey: "AIzaSyC3-i7a51roYAzwQRbjN0dzG63h9sKTKJE",
    authDomain: "ecommerce-610c5.firebaseapp.com",
    projectId: "ecommerce-610c5",
    storageBucket: "ecommerce-610c5.appspot.com",
    messagingSenderId: "578842281575",
    appId: "1:578842281575:web:97896a379b276e14abf6c2",
    measurementId: "G-G9NK7D6Q6E"
  };


  const app = initializeApp(firebaseConfig)
  export const auth = getAuth(app)


  export const logout = () => {
    return auth.signOut();
  };