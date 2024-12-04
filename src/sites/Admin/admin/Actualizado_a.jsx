import { Volver } from "../../../components/Volver"
import '../../../Styles/Desktop/administrador/estilos_admin/Actualizado_a/Actualizado_a.css'
import admin from '../../../assets/Iconos_perfil/admin.png'

export const Actualizado_a = () => {
  return (
    <div className="container">
        <Volver />

        <div className="body">

            <div className="datos">
                <div className="p1">
                    <img src={admin} alt="" />
                    <p>¡Administrador actualizado
                    con exito!</p>
                </div>
            </div>
            <a href="#" className="boton">Enviar credenciales</a>
        </div>
    </div>
  )
}