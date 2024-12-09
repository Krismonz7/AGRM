import Navbar from "../../components/Navbar"
import foto_mesa from '../../assets/fondo_mesa.png'
import '../../Styles/Desktop/usuario/Mesas_reserva/Mesas_reserva.css'

export const Mesas_reserva = () => {
  return (
    <div className="mesas_reserva">
        <Navbar/>

        <div className="titulo">
            Tus reservas 😃
        </div>

        <div className="body">


            <div className="target">

                <div className="img">
                    <img src={foto_mesa} alt="" />
                </div>

                <div className="info">
                    <p>Dia: 07 de marzo </p>
                    <p>Mesas: Mesa #2 </p>
                    <p>Horario: 2:00 pm 4:00 p.m</p>
                </div>
            </div>

            <div className="target">

                <div className="img">
                    <img src={foto_mesa} alt="" />
                </div>

                <div className="info">
                    <p>Dia: 07 de marzo </p>
                    <p>Mesas: Mesa #2 </p>
                    <p>Horario: 2:00 pm 4:00 p.m</p>
                </div>
            </div>

            <div className="target">

                <div className="img">
                    <img src={foto_mesa} alt="" />
                </div>

                <div className="info">
                    <p>Dia: 07 de marzo </p>
                    <p>Mesas: Mesa #2 </p>
                    <p>Horario: 2:00 pm 4:00 p.m</p>
                </div>
            </div>

            <div className="target">

                <div className="img">
                    <img src={foto_mesa} alt="" />
                </div>

                <div className="info">
                    <p>Dia: 07 de marzo </p>
                    <p>Mesas: Mesa #2 </p>
                    <p>Horario: 2:00 pm 4:00 p.m</p>
                </div>
            </div>

            <div className="target">

                <div className="img">
                    <img src={foto_mesa} alt="" />
                </div>

                <div className="info">
                    <p>Dia: 07 de marzo </p>
                    <p>Mesas: Mesa #2 </p>
                    <p>Horario: 2:00 pm 4:00 p.m</p>
                </div>
            </div>

            <div className="target">

                <div className="new">
                    +
                </div>

                <div className="info">
                    <p>Dia: 07 de marzo </p>
                    <p>Mesas: Mesa #2 </p>
                    <p>Horario: 2:00 pm 4:00 p.m</p>
                </div>
            </div>
        </div>
    </div>
  )
}
