import { Volver } from "../../../components/Volver"
import '../../../Styles/Desktop/administrador/estilos_mesa/Editar_m/Editar_m.css'
import mesa from '../../../assets/Iconos_perfil/mesa.png'

export const Editar_m = () => {
  return (
    <div className="container">
        <Volver/>

        <div className="body">

            <div className="datos">
                <div className="p1">
                    <img src={mesa} alt="" />
                    <p>Mesa 3</p>
                </div>
                <div className="p2">
                    <label>Numero de mesa: </label>
                    <input type="number" placeholder="Numero"/>
                    <label>Numero de sillas: </label>
                    <input type="number" placeholder="Sillas"/>
                </div>
            </div>
            <a href="#" className="boton">Actualizar</a>
            <a href="#" className="boton_r">Eliminar</a>
        </div>
    </div>
  )
}
