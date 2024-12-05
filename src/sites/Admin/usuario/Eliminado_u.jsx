import { Volver } from "../../../components/Volver"
import '../../../Styles/Desktop/administrador/estilos_usuario/Eliminado_u/Eliminado_u.css'
import usuario from '../../../assets/Iconos_perfil/usuario.png'

export const Eliminado_u = () => {
  
  return (
    <div className="container">
        <Volver />

        <div className="body">

            <div className="datos">
                <div className="p1">
                    <img src={usuario} alt="" />
                    <p>! Perfil de usuario eliminado ¡ 😲</p>
                </div>
            </div>

        </div>

    </div>
  )
}