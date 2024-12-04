import logo from "../assets/logotipo.png"
import flecha from '../assets/flecha.png'
import '../Styles/Desktop/Inicio_sesion/Inicio_sesion.css'


export const Inicio_sesion = () => {
  return (
    <div className = "inicio">
        <div className="header">
            <div className="volver">
                <img src={flecha} alt="" />
            </div>
            <div className="titulo">
                Inicio sesion - BBQ REAL SMOKE
            </div>
        </div>

        
        <form className="sesion">

          <p>Correo:</p>
          <input type="text" placeholder="Correo"/>

          <p>Contraseña:</p>
          <input type="text" placeholder="Correo"/>

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