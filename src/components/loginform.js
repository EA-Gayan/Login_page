import { useState } from "react"
import "./loginform.css"
import { auth } from "./firebase/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

const LoginForm = () => {

    const [username,setUsername] = useState("");
    const [password,sePassword] = useState("");

    const userSignIn = ()=>{
        signInWithEmailAndPassword(auth, username, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log("User Signed");

            // ...
        })
        .catch((error) => {
           //const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorMessage);
            alert(errorMessage);

  });


    }


    return (
        
        <div className="cover">
            <h1>Login Page</h1>
            <input type="text" placeholder="username" value={username} onChange = {e=>{
                e.preventDefault()
                setUsername(e.target.value)
            }} />
            <input type="password" placeholder="password" value={password} onChange = {e=>{
                e.preventDefault()
                sePassword(e.target.value)
            }} />
            <div className="login-btn" onClick={userSignIn}>Login</div>
        </div>
        
    )
}

export default LoginForm