import Navbar from "../../components/Navbar"

import usuario from '../../assets/usuario.jpg'
import mesa from '../../assets/Iconos_perfil/mesa.png'
import '../../Styles/Desktop/usuario/Home_u/Home_u.css'

export const Home_u = () => {
  return (
    <div className="home_u">

      <Navbar/>

      <div className="body_home">
        <div className="contenido">

          <p className="titulo">¡Bienvenido de nuevo Dick Shawns!</p>

            <div className="mini_target">
            <img src={mesa} alt="" />
          <p className="info">Mis reservas</p>

          </div>
          
        </div>


        <div className="imagen">
          <img src={usuario} alt="" />
        </div>
      </div>

    </div>
  )
}
