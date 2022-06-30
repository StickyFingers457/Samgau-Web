// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyDKMn3DNG0xaPg4MJE5Fm7KXvqrSNGxh_w",
    authDomain: "samgau-web.firebaseapp.com",
    projectId: "samgau-web",
    storageBucket: "samgau-web.appspot.com",
    messagingSenderId: "492937973699",
    appId: "1:492937973699:web:22ceef0f700a64fd1ab776",
    measurementId: "G-TKM8JJYVF6"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  
  export { db, auth };