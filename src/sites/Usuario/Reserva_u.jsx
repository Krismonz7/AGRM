import Navbar from "../../components/Navbar"
import foto_mesa from '../../assets/fondo_mesa.png'
import '../../Styles/Desktop/usuario/Reserva_u/Reserva_u.css'



export const Reserva_u = () => {
  return (
    <div className="reserva_u">
        <Navbar/>

        <div className="reserva_body">

            <div className="info">
                <div className="data">
                  <p>Reserva: 7 marzo</p>
                  <p>Hora: 2 p.m - 4 p.m</p>
                </div>
                <button className="boton">Editar reserva</button>
                <button className="boton_rojo">Cancelar reserva</button>
            </div>

            <div className="image">
                <img src={foto_mesa} alt="" />
                <p>Mesa #2</p>
            </div>
        </div>
    </div>
  )
}
