import image from "../assets/mesa.jpg"
export const Tarjeta_mesa = () => {
     return (
    <div className="Tarjeta">
        <div className="Imagen">
        <img src={image} alt="image" />
        </div>
        <p className="Nombre">
            Mesa #1
        </p>
        <button className="Reserva">
            ! Ir a reservar ¡
        </button>
    </div>)
}
