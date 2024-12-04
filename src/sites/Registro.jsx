import logo from "../assets/logo.png"
import '../Styles/Desktop/Registro/Registro.css'
import { Volver } from "../components/Volver"


export const Registro = () => {
  return (
    <div className = "inicio">
        <Volver/>

        
        <form className="sesion">

          <p>Nombre:</p>
          <input type="text" placeholder="nombre" id="nombre"/>

          <p>Correo:</p>
          <input type="text" placeholder="correo" id="correo"/>

          <p>Contraseña:</p>
          <input type="text" placeholder="contrasena" id="contrasena"/>

          
          <button type="submit">
            Ingresar
          </button>
          
        </form>

        <div className="imagen">
            <div className="title">
                !Bienvenido usuario nuevo! 😃
            </div>
            <div className="logo">
                <img src={logo} alt="" />
            </div>
        </div>

    </div>
  )

}