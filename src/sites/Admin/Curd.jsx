import {Volver} from '../../components/Volver'
import recepconista from '../../assets/Iconos_perfil/recepcionista.png'
import gerente from '../../assets/Iconos_perfil/gerente.png'
import usuario from '../../assets/Iconos_perfil/usuario.png'
import admin from '../../assets/Iconos_perfil/admin.png'
import mesa from '../../assets/Iconos_perfil/mesa.png'
import '../../Styles/Desktop/administrador/estilos_admin/Crud/Crud.css'
export const Curd = () => {
  return (
    <div className="container">
        <Volver/>        

        <div className="body">
            <div className="target">
                <img src={usuario} alt="" />
                <h3>Usuario</h3>
                <button>
                    Editar Usuario
                </button>
            </div>
            <div className="target">
                <img src={admin} alt="" />
                <h3>Admin</h3>
                <button>
                    Editar Admin
                </button>
            </div>

            <div className="target">
                <img src={gerente} alt="" />
                <h3>gerente</h3>
                <button>
                    Editar gerente
                </button>
            </div>

            <div className="target">
                <img src={mesa} alt="" />
                <h3>mesa</h3>
                <button>
                    Editar mesa
                </button>
            </div>

            <div className="target">
                <img src={recepconista} alt="" />
                <h3>Recepconista</h3>
                <button>
                    Editar Recepconista
                </button>
            </div>

        </div>
    </div>
  )
}
