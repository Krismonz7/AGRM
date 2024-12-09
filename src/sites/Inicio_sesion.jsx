import logo from "../assets/logotipo.png"
import flecha from '../assets/flecha.png'
import '../Styles/Desktop/Inicio_sesion/Inicio_sesion.css'
import { useNavigate } from "react-router-dom"
import { Volver } from "../components/Volver"
import { useState } from "react"


export const Inicio_sesion = () => {

  //Estados del coreo y contrasena:
  const [correo,setCorreo] = useState();
  const [contrasena,setContrasena] = useState();

  const navigate = useNavigate();

  const goToProfile = (e) => {
    e.preventDefault(); // Prevenir el comportamiento por defecto del formulario
    //Este if es para verificar las credenciales del admin
    if(correo == "jhontravolta" && contrasena == "123" ){
      navigate("/admin/inicio_a"); // Navega relativo al perfil de admin
    }
    //Este if es para el usuario normal
    else if(correo == "dick" && contrasena == "122"){
      navigate("/usuario/home_u"); // Navega al perfil de usuario
    }
    
  };
  
  return (
    <div className = "inicio">
        <div className="header">
            <Volver ruta="/"/>
            <div className="titulo" >
                Inicio sesion - BBQ REAL SMOKE
            </div>
        </div>

        
        <form className="sesion" onSubmit={goToProfile}>

          <p>Correo:</p>
          <input type="text" placeholder="Correo" onChange={(e) => setCorreo(e.target.value)}/>

          <p>Contraseña:</p>
          <input type="text" placeholder="Contrasena" onChange={(e) => setContrasena(e.target.value)}/>

          <a href="" className="enlace">
            Registrate 😋
          </a>
          <button type="submit">
            Ingresar
          </button>
          
        </form>

        <div className="imagen">
            <div className="title">BBQ EL REAL</div>
            <div className="logo">
                <img src={logo} alt="" />
            </div>
        </div>

    </div>
  )

}