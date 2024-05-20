import Input from "./Input"
import { useState } from "react"

function Form({title, description, submitButtonText}) {
    const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/
    const senhaRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-z\d\S]{8,}/

    const [emailState, setEmailState] = useState(false)
    const [senhaState, setSenhaState] = useState(false)

    function handleClick(event){
      event.preventDefault();
      if (emailState && senhaState){
        alert("Logado com sucesso!")
      }
      else{
        alert("Email ou senha incorretos!")
      }
    }

    return(
          <form className='form'>
            <h2>{title}</h2>
            <p>{description}</p>

            <div className='inputs'>
                <Input type='text' name='email' regex={regexEmail} setState={setEmailState}/>
                <Input type='password' name='password' regex={senhaRegex} setState={setSenhaState}/>
            </div>
          
            <button onClick={(e) => handleClick(e)}>{submitButtonText}</button>
          
            <p>Ainda não tem um login? <a href="#">Criar uma conta</a></p>
          </form>
    )
}

export default Form