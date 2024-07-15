import "../Styles/general.css"
import image from "../assets/mesa.png"
export const Table_free = (props) => {
  return (
    <div className="table_target">

        <img src={image} alt="" className="imagen"/>

        <div className="info">
          Disponible por {props.tiempo}
          <br />

          Mesa {props.mesa}
          <br />
          Disponible desde {props.horas}

          <button className="reserva">
            !Reserva ahora¡ 🔥
          </button>
        </div>

    </div>
  )
}