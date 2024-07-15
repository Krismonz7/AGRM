import { Penal } from "../components/Penal"
import imagen from "../assets/warn.png"
import "../Styles/general.css"

export const Penalizaciones = () => {
  return (<div className="penalizaciones">
      <div className="header">

        Penalizaciones
      </div>
      <div className="body">

        <Penal imagen={imagen} fecha="05 marzo 2004" cuota="$ 200"/>
        <Penal imagen={imagen} fecha="05 marzo 2004" cuota="$ 200"/>
        <Penal imagen={imagen} fecha="05 marzo 2004" cuota="$ 200"/>
        <Penal imagen={imagen} fecha="05 marzo 2004" cuota="$ 200"/>
        <Penal imagen={imagen} fecha="05 marzo 2004" cuota="$ 200"/>
        <Penal imagen={imagen} fecha="05 marzo 2004" cuota="$ 200"/>
        <Penal imagen={imagen} fecha="05 marzo 2004" cuota="$ 200"/>
        <Penal imagen={imagen} fecha="05 marzo 2004" cuota="$ 200"/>
        <Penal imagen={imagen} fecha="05 marzo 2004" cuota="$ 200"/>
        <Penal imagen={imagen} fecha="05 marzo 2004" cuota="$ 200"/>
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
