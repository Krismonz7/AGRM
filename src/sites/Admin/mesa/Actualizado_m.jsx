import { Volver } from "../../../components/Volver"
import '../../../Styles/Desktop/administrador/estilos_mesa/Actualizado_m/Actualizado_m.css'
import mesa from '../../../assets/Iconos_perfil/mesa.png'

export const Actualizado_m = () => {
  return (
    <div className="container">
        <Volver />

        <div className="body">

            <div className="datos">
                <div className="p1">
                    <img src={mesa} alt="" />
                    <p>¡Mesa actualizada
                    con exito!</p>
                </div>
            </div>
            <a href="#" className="boton">Enviar credenciales</a>
        </div>
    </div>
  )
}