import { Volver } from "../../../components/Volver"
import '../../../Styles/Desktop/administrador/estilos_admin/Eliminado/Eliminado.css'
import admin from '../../../assets/Iconos_perfil/admin.png'

export const Eliminado_a = () => {
  
  return (
    <div className="container">
        <Volver />

        <div className="body">

            <div className="datos">
                <div className="p1">
                    <img src={admin} alt="" />
                    <p>! Perfil eliminado ¡ 😲</p>
                </div>
            </div>

        </div>

    </div>
  )
}