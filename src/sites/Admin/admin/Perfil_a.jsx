import { Volver } from "../../../components/Volver"
import '../../../Styles/Desktop/administrador/estilos_admin/Perfil_m/Perfil_a.css'
import admin from '../../../assets/Iconos_perfil/admin.png'

export const Perfil_a = () => {
  return (
    <div className="container">
        <Volver/>

        <div className="body">

            <div className="datos">
                <div className="p1">
                    <img src={admin} alt="" />
                    <p>Travolta</p>
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
