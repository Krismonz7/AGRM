import Navbar from "../../components/Navbar"
import foto_mesa from '../../assets/fondo_mesa.png'
import cerrado from '../../assets/cerrado.png'

import { Searchbar } from "../../components/Searchbar"
import '../../Styles/Desktop/usuario/Mesas_disponibles/Mesas_disponibles.css'

export const Mesas_dispoibles = () => {
  return (
    <div className="mesas_disponibles">

        <Navbar/>
        <Searchbar/>

        <div className="body">

            <div className="target">

                <img className="imagen" src={foto_mesa} alt="" />
                <img className="cartel" src={cerrado} alt="" />

                <p className="titulo">Mesa 1</p>

                <button className="boton">
                    Ver disponibilidad
                </button>
            </div>

            <div className="target">

                <img className="imagen" src={foto_mesa} alt="" />

                <p className="titulo">Mesa 1</p>

                <button className="boton">
                    Ver disponibilidad
                </button>
            </div>

            <div className="target">

                <img className="imagen" src={foto_mesa} alt="" />

                <p className="titulo">Mesa 1</p>

                <button className="boton">
                    Ver disponibilidad
                </button>
            </div>
            
            <div className="target">

                <img className="imagen" src={foto_mesa} alt="" />

                <p className="titulo">Mesa 1</p>

                <button className="boton">
                    Ver disponibilidad
                </button>
            </div>

            <div className="target">

                <img className="imagen" src={foto_mesa} alt="" />

                <p className="titulo">Mesa 1</p>

                <button className="boton">
                    Ver disponibilidad
                </button>
            </div>

            <div className="target">

                <img className="imagen" src={foto_mesa} alt="" />

                <p className="titulo">Mesa 1</p>

                <button className="boton">
                    Ver disponibilidad
                </button>
            </div>

            <div className="target">

                <img className="imagen" src={foto_mesa} alt="" />

                <p className="titulo">Mesa 1</p>

                <button className="boton">
                    Ver disponibilidad
                </button>
            </div>

            <div className="target">

                <img className="imagen" src={foto_mesa} alt="" />

                <p className="titulo">Mesa 1</p>

                <button className="boton">
                    Ver disponibilidad
                </button>
            </div>

            
        </div>

    </div>
  )
}
