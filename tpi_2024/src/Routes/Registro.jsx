import { useState } from "react"
import ReactDOM from "react-dom/client"

const Registro=()=>{
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [edad, setEdad] = useState(0);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [ciudad, setCiudad] = useState("");
    const [pais, setPais] = useState("");

    return(
        <form>
            <label >
                <input type="text" 
                value={nombre}
                onChange={(e)=> setNombre(e.target.value)}/>
            </label>
        </form>
    )
}
export default Registro;

