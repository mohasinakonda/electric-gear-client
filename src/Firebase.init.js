
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
const firebaseConfig = {
    /* apiKey: "AIzaSyDoN9h0J1Wxdn2o8mcsT_TfbjVQHWG6mRA",
    authDomain: "electric-grear.firebaseapp.com",
    projectId: "electric-grear",
    storageBucket: "electric-grear.appspot.com",
    messagingSenderId: "1039718964000",
    appId: "1:1039718964000:web:836f0f048eedaababad545", */
    apiKey: process.env.REACT_APPAPI_KEY,
    authDomain: process.env.REACT_APPAUTH_DOMAIN,
    projectId: process.env.REACT_APPPROJECT_ID,
    storageBucket: process.env.REACT_APPSTORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APPMESSAGING_SENDER_ID,
    appId: process.env.REACT_APPAPP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth