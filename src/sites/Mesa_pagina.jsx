import "../Styles/general.css"
import mesa from "../assets/mesa.png"
export const Mesa_pagina = () => {
  return (
    <div className="mesa_pagina">
        
        <div className="body">
            <img src={mesa} alt="" className="mesa"/>

            <div className="title">Reserva : 7 a.m - 2 p.m a 4 p.m</div>
            <button className="editar"> Editar</button>
            <button className="cancelar">Cancelar</button>
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
