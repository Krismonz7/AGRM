import guy from '../assets/Hombre_estrellado.png'
import flecha from '../assets/flecha.png'
import '../Styles/Desktop/Recuperar_c/Recuperar_c.css'
export const Recuperar_c = () => {
  return (
    <div className="Container">
        <div className="Header">
            <div className="Volver">
                <img src={flecha} alt="" />
            </div>
        </div>

        <form action="" className="Form">
            <label htmlFor="">Ingrese el correo de la cuenta
            de la cual desea recuperarla contraseña:</label>
            <input type="text" id='correo'/>
            <button className="Enviar">
                Enviar
            </button>
        </form>
        <div className="Imagen">
            <img src={guy} alt="" />
        </div>
    </div>
  )
}
