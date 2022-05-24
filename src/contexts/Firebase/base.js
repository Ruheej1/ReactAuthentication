import app from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBbGxQUSrTTsS6N9VQe2hx1erNkk6pBF9E",
    authDomain: "reactauth-3a836.firebaseapp.com",
    projectId: "reactauth-3a836",
    storageBucket: "reactauth-3a836.appspot.com",
    messagingSenderId: "30923093539",
    appId: "1:30923093539:web:466b372cffdc99961a2396",
    measurementId: "G-3538RT51V6"
};

class Firebase{
    constructor() {
        this.app = app.initializeApp(firebaseConfig);
    }

    signUserIn = async() => {
        const provider = new app.auth.TwitterAuthProvider();
        app
        .auth()
        .signInWithPopup(provider);
    }
}

export default Firebase;