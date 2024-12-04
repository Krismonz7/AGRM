import "../../Styles/Desktop/recepcionista/Mesas/Mesas.css"
import fecha_logo from '../../assets/fecha.png';
import  {Tarjeta_mesa} from "../../components/Tarjeta_mesa.jsx"
import Navbar from "../../components/Navbar.jsx"

export const Mesas = () => {
  return (
    

    <div className="Mesas">
      <Navbar/>

      <p className="titulo">¡Mesas Disponibles!</p>

      <div className="Header">
        <img src={fecha_logo} alt="" className="imagen" />
        <input type="date" className="Fecha" id="" placeholder=" : "/>
      </div>
        <a href="#" className="libres">Libres a ultima hora! 😋</a>
    
        <div className="Seccion_mesas">
          <Tarjeta_mesa />
          <Tarjeta_mesa />
          <Tarjeta_mesa />
          <Tarjeta_mesa />
          <Tarjeta_mesa />
          <Tarjeta_mesa />
          <Tarjeta_mesa />
          <Tarjeta_mesa />

    </div>
    </div>
  )
}
