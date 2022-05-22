
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// import { getAuth } from 'firebase/auth'
const firebaseConfig = {
    apiKey: "AIzaSyDoN9h0J1Wxdn2o8mcsT_TfbjVQHWG6mRA",
    authDomain: "electric-grear.firebaseapp.com",
    projectId: "electric-grear",
    storageBucket: "electric-grear.appspot.com",
    messagingSenderId: "1039718964000",
    appId: "1:1039718964000:web:836f0f048eedaababad545",


    /*  apiKey: process.env.REACT_APP_APIKEY,
     authDomain: process.env.REACT_APP_AUTHDOMAIN,
     projectId: process.env.REACT_APP_PROJECTID,
     storageBucket: process.env.REACT_APP_STORAGEBUCKET,
     messagingSenderId: process.env.REACT_APP_MESSAGINGSENDER_ID,
     appId: process.env.REACT_APP_APPID, */


};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const auth = getAuth(app)
const auth = getAuth(app)
export default auth