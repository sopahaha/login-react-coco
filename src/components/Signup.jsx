import { createUserWithEmailAndPassword } from "firebase/auth"
import { useState } from "react"
import { auth } from "../firebase"
 
const Signup = () => {

  const [email, setEmail] = useState("henrique@sopa.com")
  const [password, setPassoword] = useState("123321")


  const formHandler = async (e)=>{
    e.preventDefault()

    try{
      const userCredencial = await createUserWithEmailAndPassword(auth,email,password)
      console.log("foi",userCredencial.user)
    }catch(error){
      console.error(error)
    }

  }

    return(
      <>
        <h1>Criar conta</h1>
        <form onSubmit={formHandler}>
          <input type="email" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
          <input type="password" value={password} onChange={(e)=>{setPassoword(e.target.value)}}/>
          <button type="submit">Criar</button>
        </form>
      </>
    )
}
 
export default Signup