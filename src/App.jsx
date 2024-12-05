
/*Importaciones del router */
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


//General
import { Inicio } from "./sites/Inicio"
import { Inicio_sesion } from "./sites/Inicio_sesion"
import { Registro } from "./sites/Registro"
import { Recuperar_c } from "./sites/Recuperar_c"
import { Recuperar_e } from "./sites/Recuperar_e"
//import { Notificaciones } from "./sites/Notificaciones"




//Recepcionista
//import { Mesas } from "./sites/Recepcionista/Mesas"
//import { Ultima_hora } from "./sites/Recepcionista/Ultima_hora"
//import { Reserva } from "./sites/Recepcionista/Reserva"
//import { Reserva_u } from "./sites/Recepcionista/Reserva_u"


//ADMIN
//Area de los cruds

//--CRUD Admin
//import { Curd } from "./sites/Admin/Curd"
//import { Admin_m } from "./sites/Admin/admin_m/Admin_m"
//import { Perfil_a } from "./sites/Admin/admin/Perfil_a"
//import { Editar_a } from "./sites/Admin/admin/Editar_a"
//import { Actualizado_a } from "./sites/Admin/admin/Actualizado_a"
//import { Credenciales_a } from "./sites/Admin/admin/Credenciales_a"
import { Eliminado } from "./sites/Admin/admin/Eliminado"

//--CRUD Mesas
import { Actualizado_m } from "./sites/Admin/mesa/Actualizado_m";
import { Admin_menu_m } from "./sites/Admin/mesa/Admin_menu_m";
import { Editar_m } from "./sites/Admin/mesa/Editar_m";
import { Eliminado_m } from "./sites/Admin/mesa/Eliminado_m";
import { Perfil_m } from "./sites/Admin/mesa/Perfil_m";
//--CRUD usuarios
import { Admin_menu_u } from "./sites/Admin/usuario/Admin_menu_u";
import { Perfil_u } from "./sites/Admin/usuario/Perfil_u";
import { Editar_u } from "./sites/Admin/usuario/Editar_u";
import { Actualizado_u } from "./sites/Admin/usuario/Actualizado_u";
import { Credenciales_u } from "./sites/Admin/usuario/Credenciales_u";
import { Eliminado_u } from "./sites/Admin/usuario/Eliminado_u";

//--CRUD Recepcionista
import { Admin_menu_r } from "./sites/Admin/recepcionsta/Admin_menu_r";
import { Perfil_r } from "./sites/Admin/recepcionsta/Perfil_r";
import { Editar_r } from "./sites/Admin/recepcionsta/Editar_r";
import { Actualizado_r } from "./sites/Admin/recepcionsta/Actualizado_r";
import { Credenciales_r } from "./sites/Admin/recepcionsta/Credenciales_r";
import { Eliminado_r } from "./sites/Admin/recepcionsta/Eliminado_r";

//--CRUD Gerente
import { Admin_menu_g } from "./sites/Admin/gerente/Admin_menu_g";
import { Perfil_g } from "./sites/Admin/gerente/Perfil_g";
import { Editar_g } from "./sites/Admin/gerente/Editar_g";
import { Actualizado_g } from "./sites/Admin/gerente/Actualizado_g";
import { Credenciales_g } from "./sites/Admin/gerente/Credenciales_g";
import { Eliminado_g } from "./sites/Admin/gerente/Eliminado_g";


function App() {
  return (
    <Router>
      <Routes>
        {/* General */}
        <Route path="/" element={<Inicio />} />

        <Route path="/inicio_sesion" element={<Inicio_sesion />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/about" element={<Eliminado />} />
        <Route path="/recuperar_c" element={<Recuperar_c />} />
        <Route path="/recuperar_c/recuperar_e" element={<Recuperar_e />} />
        <Route path="/about" element={<Eliminado />} />

        {/* Crud de mesas */}
        <Route path="/admin/mesas/actualizado" element={<Actualizado_m/>}/>
        <Route path="/admin/mesas/admin_m" element={<Admin_menu_m/>}/>
        <Route path="/admin/mesas/admin_menu_m" element={<Admin_menu_m/>}/>
        <Route path="/admin/mesas/editar_m" element={<Editar_m/>}/>
        <Route path="/admin/mesas/eliminado_m" element={<Eliminado_m/>}/>
        <Route path="/admin/mesas/perfil_m" element={<Perfil_m/>}/>

        {/* Crud clientes */}
        <Route path="/admin/usuarios/admin_menu_u" element={<Admin_menu_u/>}/>
        <Route path="/admin/usuarios/perfil_u" element={<Perfil_u/>}/>
        <Route path="/admin/usuarios/editar_u" element={<Editar_u/>}/>
        <Route path="/admin/usuarios/actualizado_u" element={<Actualizado_u/>}/>
        <Route path="/admin/usuarios/credenciales_u" element={<Credenciales_u/>}/>
        <Route path="/admin/usuarios/eliminado_u" element={<Eliminado_u/>}/>


        {/* Crud Recepcionista */}

        <Route path="/admin/usuarios/admin_menu_r" element={<Admin_menu_r/>}/>
        <Route path="/admin/usuarios/perfil_r" element={<Perfil_r/>}/>
        <Route path="/admin/usuarios/editar_r" element={<Editar_r/>}/>
        <Route path="/admin/usuarios/actualizado_r" element={<Actualizado_r/>}/>
        <Route path="/admin/usuarios/credenciales_r" element={<Credenciales_r/>}/>
        <Route path="/admin/usuarios/eliminado_r" element={<Eliminado_r/>}/>

        {/* Crud Gerentess */}
        <Route path="/admin/gerente/admin_menu_g" element={<Admin_menu_g/>}/>
        <Route path="/admin/gerente/perfil_g" element={<Perfil_g/>}/>
        <Route path="/admin/gerente/editar_g" element={<Editar_g/>}/>
        <Route path="/admin/gerente/actualizado_g" element={<Actualizado_g/>}/>
        <Route path="/admin/gerente/credenciales_g" element={<Credenciales_g/>}/>
        <Route path="/admin/gerente/eliminado_g" element={<Eliminado_g/>}/>





      </Routes>
    </Router>
  );
}

export default App