import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { getFirestore, collection, addDoc } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyCdAU3ZKcPIWtLh2OvMjq3YGgkyl7DHShg",
    authDomain: "learing-bbb8f.firebaseapp.com",
    projectId: "learing-bbb8f",
    storageBucket: "learing-bbb8f.appspot.com",
    messagingSenderId: "1354569876",
    appId: "1:1354569876:web:fc3503e9c33a46784d7c81"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

function register(email, password, fname, lname) {
    createUserWithEmailAndPassword(auth, email, password)
        .then(async (userCredential) => {
            const user = userCredential.user;
            // console.log(userCredential)
            try {
                const docRef = await addDoc(collection(db, "user"), {
                    fname: fname,
                    lname: lname,
                    email: email
                });
                alert("Sucess FUlly Risgister")
                console.log("Document written with ID: ", docRef.id);
            } 
            catch (e) {
                console.error("Error adding document: ", e);
                alert(e.message)
            }
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            //..
            alert(errorMessage)
        });

};

function logIN(email, password) {
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {

            const user = userCredential.user;
            //..
            alert("Sucess logIN")


        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorMessage)
        });
}

export {
    register,
    logIN
}
