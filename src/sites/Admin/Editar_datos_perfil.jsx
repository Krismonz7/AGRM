import { Volver } from "../../components/Volver"
import admin from '../../assets/Iconos_perfil/admin.png'
import '../../Styles/Desktop/administrador/Editar_datos_perfil/Editar_datos_perfil.css'
export const Editar_datos_perfil = () => {
    
  return (
    <div className="editar_perfil">
        <Volver/>
        <div className="body">
            <div className="target">

                {/* Seccion de la informacion */}

                <div className="datos">
                    <label htmlFor="">Nombre:</label>
                    <input type="text" name="" id="" placeholder="Nombre"/>
                    <label htmlFor="">Documento:</label>
                    <input type="number" name="" id="" placeholder="Nombre"/>
                    <label htmlFor="">Correo:</label>
                    <input type="text" name="" id="" placeholder="Nombre"/>
                    <label htmlFor="">Contraseña:</label>
                    <input type="password" name="" id="" placeholder="Nombre"/>
                    <button>
                        Guardar
                    </button>
                </div>

                <div className="imagen">
                    <img src={admin} alt="" />
                    <button>Cancelar</button>
                </div>



            </div>
        </div>
    </div>
  )
}
