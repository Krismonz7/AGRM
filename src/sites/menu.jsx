import "../Styles/general.css"
import { Reserva } from "../components/reserva"
export const Menu = () => {
  return (
    <div className="menu">
      <header className="header">

        <button href="https://co.pinterest.com/">Tus reservas</button>
        <div className="sep"></div>
        <button href="https://co.pinterest.com/">Libres a ultima hota</button>
      </header>


      <div className="body">
        <Reserva imagen="https://i.ibb.co/N2ykp5G/mesa.jpg" dia="7 de marzo" mesa="mesa 2" hora1="7 p.m" hora2="9 p.m"/>

        <Reserva imagen="https://i.ibb.co/N2ykp5G/mesa.jpg" dia="7 de marzo" mesa="mesa 2" hora1="7 p.m" hora2="9 p.m"/>
        <Reserva imagen="https://i.ibb.co/N2ykp5G/mesa.jpg" dia="7 de marzo" mesa="mesa 2" hora1="7 p.m" hora2="9 p.m"/>
        <Reserva imagen="https://i.ibb.co/N2ykp5G/mesa.jpg" dia="7 de marzo" mesa="mesa 2" hora1="7 p.m" hora2="9 p.m"/>
        <Reserva imagen="https://i.ibb.co/N2ykp5G/mesa.jpg" dia="7 de marzo" mesa="mesa 2" hora1="7 p.m" hora2="9 p.m"/>
        <Reserva imagen="https://i.ibb.co/N2ykp5G/mesa.jpg" dia="7 de marzo" mesa="mesa 2" hora1="7 p.m" hora2="9 p.m"/>
        <Reserva imagen="https://i.ibb.co/N2ykp5G/mesa.jpg" dia="7 de marzo" mesa="mesa 2" hora1="7 p.m" hora2="9 p.m"/>
        <Reserva imagen="https://i.ibb.co/N2ykp5G/mesa.jpg" dia="7 de marzo" mesa="mesa 2" hora1="7 p.m" hora2="9 p.m"/>
        <Reserva imagen="https://i.ibb.co/N2ykp5G/mesa.jpg" dia="7 de marzo" mesa="mesa 2" hora1="7 p.m" hora2="9 p.m"/>
      </div>


      <div className="nav_foot">
            <li className="item">
                <img src="https://i.ibb.co/9s8yYdK/engranaje.png" alt="" />
                Configuraciones
            </li>
            <div className="bar"></div>
            <li className="item">
                <img src="https://i.ibb.co/278KKqF/casa.png" alt="" />
                Inicio 
            </li>
            <div className="bar"></div>
            <li className="item">
                <img src="https://i.ibb.co/GdvNY6F/perfil.png" alt="" />
                Perfil
            </li>
      </div>
    </div>
  )
}
