import notificacion from "../assets/notificacion.png";
import configuracion from "../assets/configuracion.png";
import casas from "../assets/casas.png";
import '../Styles/Desktop/Navbar/Navbar.css'

export default function Navbar() {
  return (
    <div className="Navbar">
        <div className="item">
            <img src={configuracion} alt="casa" className="" />
            <p>Ajustes</p>
        </div>
        <div className="item">
            <img src={casas} alt="casa" className="" />
            <p>Inicio</p>
        </div>
        <div className="item">
            <img src={notificacion} alt="casa" className="" />
            <p>Notificaciones</p>
        </div>

    </div>
  )
}
