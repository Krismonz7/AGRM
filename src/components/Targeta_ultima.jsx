import image from "../assets/mesa.jpg"
export const Tarjeta_ultima = (props) => {
     return (
    <div className="Tarjeta">
        <div className="Imagen">
        <img src={image} alt="image" />
        </div>
        <p className="Nombre">
            Mesa #1
            <br />
            Disponible por {props.minutos} minutos rango de hora: {props.horas}
        </p>
        <button className="Reserva">
            ! Ir a reservar ¡
        </button>
    </div>)
}
