import { Volver } from "../../../components/Volver"
import '../../../Styles/Desktop/administrador/estilos_usuario/Perfil_u/Perfil_u.css'
import reci from '../../../assets/Iconos_perfil/recepcionista.png'

export const Perfil_r = () => {
  return (
    <div className="container">
        <Volver/>

        <div className="body">

            <div className="datos">
                <div className="p1">
                    <img src={reci} alt="" />
                    <p>Skipper</p>
                </div>
                <div className="p2">
                    <p>Nombre: </p>
                    <p>Correo: </p>
                    <p>CC: </p>
                    <p>Contraseña: </p>
                </div>
            </div>
            <a href="#" className="boton">Editar</a>
            <a href="#" className="boton_r">Eliminar</a>
        </div>
    </div>
  )
}
