import '../Styles/Desktop/Recuperar_e/Recuperar_e.css'
import guy from "../assets/fallout_guy3.png"
export const Recuperar_e = () => {
  return (
    <div className="Container">
      <img src={guy} alt="" className="Imagen" />
      <p className="texto">
      ¡Correo de recuperacion enviado a travol*****com!
      </p>
      <button className="boton">
        Volver
      </button>
    </div>
  )
}
