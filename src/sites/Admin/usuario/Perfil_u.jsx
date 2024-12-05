import { Volver } from "../../../components/Volver"
import '../../../Styles/Desktop/administrador/estilos_usuario/Perfil_u/Perfil_u.css'
import usuario from '../../../assets/Iconos_perfil/usuario.png'

export const Perfil_u = () => {
  return (
    <div className="container">
        <Volver/>

        <div className="body">

            <div className="datos">
                <div className="p1">
                    <img src={usuario} alt="" />
                    <p>Dweyne Jhonson</p>
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
