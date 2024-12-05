import { Volver } from "../../../components/Volver"
import '../../../Styles/Desktop/administrador/estilos_usuario/Actualizado_u/Actualizado_u.css'
import usuario from '../../../assets/Iconos_perfil/usuario.png'

export const Actualizado_u = () => {
  return (
    <div className="container">
        <Volver />

        <div className="body">

            <div className="datos">
                <div className="p1">
                    <img src={usuario} alt="" />
                    <p>¡Usuario actualizado
                    con exito! 😃</p>
                </div>
            </div>
            <a href="#" className="boton">Enviar credenciales</a>
        </div>
    </div>
  )
}