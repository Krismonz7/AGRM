import { Volver } from "../../../components/Volver"
import '../../../Styles/Desktop/administrador/estilos_recepcionista/Editar_r/Editar_r.css'
import reci from '../../../assets/Iconos_perfil/recepcionista.png'

export const Editar_r = () => {
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
