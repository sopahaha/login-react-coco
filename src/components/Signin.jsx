import { signInWithEmailAndPassword } from "firebase/auth"
import { useState } from "react"
import { auth } from "../firebase"
 
const Signin = () => {

  const [email, setEmail] = useState("henrique@sopa.com")
  const [password, setPassoword] = useState("123321")


  const formHandler = async (e)=>{
    e.preventDefault()

    signInWithEmailAndPassword(auth,email,password)
    .then((userCredential)=>{
      const user = userCredential.user;
      alert("boa mlk", user)
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage)
  });

  }

    return(
      <>
        <h1>Entrar na conta</h1>
        <form onSubmit={formHandler}>
          <input type="email" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
          <input type="password" value={password} onChange={(e)=>{setPassoword(e.target.value)}}/>
          <button type="submit">Criar</button>
        </form>
      </>
    )
}
 
export default Signin