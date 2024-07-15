import "../Styles/general.css"
import { Table_free } from "../components/Table_free"
export const Ultima_hora = () => {
  return (
    <div className="ultima_hora">

        <div className="header">!LIBRES A ULTIMO MOMENTO¡</div>
        <div className="body">
            <Table_free mesa="7" tiempo="10 min" horas=" 3:00 p.m a 5:00 p.m"/>
            <Table_free mesa="10" tiempo="5 min" horas=" 3:00 p.m a 5:00 p.m"/>
            <Table_free mesa="10" tiempo="5 min" horas=" 7:00 p.m a 9:00 p.m"/>
            <Table_free mesa="10" tiempo="5 min" horas=" 2:00 p.m a 4:00 p.m"/>
            <Table_free mesa="10" tiempo="5 min" horas=" 2:00 p.m a 4:00 p.m"/>
            <Table_free mesa="10" tiempo="5 min" horas=" 2:00 p.m a 4:00 p.m"/>
            <Table_free mesa="10" tiempo="5 min" horas=" 2:00 p.m a 4:00 p.m"/>

        </div>


        <div className="nav_foot">
            <li className="item">
                <img src="https://i.ibb.co/9s8yYdK/engranaje.png" alt="" />
                Configuraciones
            </li>
            <div className="bar"></div>
            <li className="item">
                <img src="https://i.ibb.co/278KKqF/casa.png" alt="" />
                Inicio 
            </li>
            <div className="bar"></div>
            <li className="item">
                <img src="https://i.ibb.co/GdvNY6F/perfil.png" alt="" />
                Perfil
            </li>
        </div>
    </div>
  )
}
