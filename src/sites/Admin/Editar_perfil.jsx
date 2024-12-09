import { Volver } from "../../components/Volver"
import admin from '../../assets/Iconos_perfil/admin.png'
import '../../Styles/Desktop/administrador/Editar_perfil/Editar_perfil.css'
export const Editar_perfil = () => {
    
  return (
    <div className="editar_perfil">
        <Volver/>
        <div className="body">
            <div className="target">

                {/* Seccion de la informacion */}

                <div className="datos">
                    <p>Nombre:</p>
                    <p>Jhon Tavolt</p>
                    <p>Correo:</p>
                    <p>jhontravolta@gmail.com</p>
                    <p>Contraseña:</p>
                    <p>**********</p>
                    <button>
                        Editar perfil
                    </button>
                </div>

                <div className="imagen">
                    <img src={admin} alt="" />
                </div>

            </div>
        </div>
    </div>
  )
}
