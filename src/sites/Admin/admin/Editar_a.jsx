import { Volver } from "../../../components/Volver"
import '../../../Styles/Desktop/administrador/estilos_admin/Editar_a/Editar_a.css'
import admin from '../../../assets/Iconos_perfil/admin.png'

export const Editar_a = () => {
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
                    <label>Nombre: </label>
                    <input type="text" placeholder="Nombre"/>
                    <label>Correo: </label>
                    <input type="text" placeholder="Correo"/>
                    <label>CC: </label>
                    <input type="text" placeholder="CC"/>
                    <label>Contraseña: </label>
                    <input type="password" placeholder="contrasena"/>
                </div>
            </div>
            <a href="#" className="boton">Actualizar</a>
            <a href="#" className="boton_r">Eliminar</a>
        </div>
    </div>
  )
}
