import "../Styles/general.css"
export const Perfil = () => {
  return (
    <div className="perfil">
        

        <div className="header">
            <div className="profile">

                <img src="https://i.ibb.co/R64xdJD/usuario.png" alt="" className="imagen"/>
                <h1 className="titulo">
                    Mateo Casares
                </h1>
            </div>
            <div className="mesas">
                <img src="https://i.ibb.co/wsmtjd6/mesa.png" alt="" className="img"/>
                <div className="titulo">Mesas Reservadas</div>
            </div>
            <div className="linea"/>
            <div className="penalizaciones">
                <img src="https://i.ibb.co/fn6Q6vx/warn.png" alt="" className="img"/>
                <div className="titulo">Penalizaciones</div>
            </div>
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
