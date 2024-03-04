//rafce- react arrow function component export

import { useRef, useState } from "react"
import Header from "./Header"
import { check } from "../utils/validate";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile  } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";



const Login = () => {
    const [signin, setSignIn] = useState(true);
    const [errorMessage, setErrorMessage] = useState('');
    const name = useRef(null);
    const email = useRef(null);
    const password = useRef(null);
    const dispatch = useDispatch();


    const signinToggle = () => {
        setSignIn(!signin);
    }
    const handleButtonClick = () => {
        // validate the form data
        const message = check(email.current.value, password.current.value);
        setErrorMessage(message);
 
        if (message) return;
        if (!signin) {
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed up 
                    const user = userCredential.user;
                    console.log(user);
                    updateProfile(user, {
                        displayName: name.current.value , photoURL: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQ7bhuZKog3JT9dClrTuN_kYnvRMc21xSjQlZqXAUg-FsldqM5ED5JYl19baJbKZ3X9p16IWg"
                      }).then(() => {
                        // Profile updated!
                        const {uid, email, displayName, photoURL} = auth.currentUser; //user will not have updated val so usee auth
                        dispatch(addUser({
                            uid: uid,
                            email: email,
                            displayName: displayName,
                            photoURL: photoURL
                          }));
                      }).catch((error) => {
                        setErrorMessage( error.message);
                      });     
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorCode + " " + errorMessage);
                });
        } else {
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorCode + " " + errorMessage);
                });
        }




    }
    return (
        <div>
            <Header />
            <div className="absolute">
                <img alt="bg" src="https://assets.nflxext.com/ffe/siteui/vlv3/c0b69670-89a3-48ca-877f-45ba7a60c16f/2642e08e-4202-490e-8e93-aff04881ee8a/IN-en-20240212-popsignuptwoweeks-perspective_alpha_website_large.jpg" />
            </div>
            <div className=" w-2/6  bg-black px-14 py-16 absolute my-36  mx-auto right-0 left-0  text-white opacity-85">
                <form onSubmit={(e) => e.preventDefault()} className=" flex flex-col">
                    <h1 className=" text-3xl font-bold ">{signin ? "Sign In" : "Sign Up"}</h1>
                    {!signin && <input className="p-3 my-4 rounded-md bg-gray-600" type="text" placeholder="Full Name" ref={name} />}
                    <input className="p-3 my-4 rounded-md bg-gray-600" type="email" placeholder="Email Address" ref={email} />
                    <input className="p-3 mt-4 mb-2  rounded-md bg-gray-600" type="password" placeholder="Password" ref={password} />
                    <p className=" text-red-700 p-2 font-bold">{errorMessage}</p>
                    <button className=" bg-red-600 text-white p-3 rounded-md my-2" onClick={handleButtonClick}>{signin ? "Sign In" : "Sign Up"}</button>
                </form>
                {signin ?
                    (<p className="text-white p-3 cursor-pointer" onClick={signinToggle}>New to Netflix? <span className="font-bold">Sign up now</span></p>) :
                    (<p className="text-white p-3 cursor-pointer" onClick={signinToggle}>Already registered? <span className="font-bold">Sign In now</span></p>)}
            </div>

        </div>
    )

}
export default Login