import { onAuthStateChanged, signOut } from "firebase/auth";
import { useState } from "react";
import { useEffect } from "react";
import { auth } from "./components/firebase/firebase";
import LoginForm from "./components/loginform";


function App() {
  const[isuser,setIsuser] = useState(false);

  useEffect(()=>{
    const userCheck = ()=>{
      onAuthStateChanged(auth, (user) => {
        if (user) {
          // User is signed in, see docs for a list of available properties
          const uid = user.uid;
          console.log(uid);
          setIsuser(true);

          // ...
        } else {
          setIsuser(false);
          // User is signed out
          // ...
        }
      });
      
    }
    userCheck();

    return()=>{
      userCheck()
    }
  },[])

  return (
    <div className="page">
      {!isuser&&(<LoginForm />)}
      {isuser&&(<div> We have already user<br></br>
        <button onClick={()=>{
        signOut(auth).then(() => {

          alert("User is sign-0ut")
          // Sign-out successful.
        }).catch((error) => {
          // An error happened.
        });
        }}>Sign Out</button>
      </div>)}

    </div>
  );
}

export default App;
