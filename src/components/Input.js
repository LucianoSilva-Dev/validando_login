import { useState } from "react"

function Input({type, name, regex, setState}) {
    const [borderColor, setBordercolor] = useState("#FFF")

    function verificar(value) {
        if(regex.test(value)){
            setBordercolor("green")
            setState(true)
        }
        else{
            setBordercolor("red")
            setState(false)
        }
    }

    return(
        <div className="input_div">
            <label htmlFor={name}>Senha</label>
            <input 
                type={type} 
                name={name} 
                className='input'
                style={{border: `1px solid ${borderColor}`}}
                onChange={(e) => verificar(e.target.value)}
                />
        </div>
    )
}

export default Input