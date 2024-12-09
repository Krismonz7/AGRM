
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

import { Inicio_a } from "./sites/Admin/Inicio_a";

//--CRUDS DEL ADMIN

//--CRUD de los mismos Administradores


import { Crud } from "./sites/Admin/Crud"
import { Admin_menu_a } from "./sites/Admin/admin/Admin_menu_a";
import { Actualizado_a } from "./sites/Admin/admin/Actualizado_a";
import { Credenciales_a } from "./sites/Admin/admin/Credenciales_a";
import { Eliminado_a } from "./sites/Admin/admin/Eliminado_a";
import { Editar_a } from "./sites/Admin/admin/Editar_a";
import { Perfil_a } from "./sites/Admin/admin/Perfil_a";



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
import { Editar_perfil } from "./sites/Admin/Editar_perfil";
import { Editar_datos_perfil } from "./sites/Admin/Editar_datos_perfil";
import { Alerta_exito } from "./sites/Admin/Alerta_exito";


//Area de los usuarios
import { Home_u } from "./sites/Usuario/Home_u";
import { Mesas_reserva } from "./sites/Usuario/Mesas_reserva";
import { Reserva_u } from "./sites/Usuario/Reserva_u";
import { Cambio_reserva } from "./sites/Usuario/Cambio_reserva";
import { Error_reserva } from "./sites/Usuario/Error_reserva";
import { Reserva_cancelada } from "./sites/Usuario/Reserva_cancelada";
import { Mesas_dispoibles } from "./sites/Usuario/Mesas_dispoibles";
import { Editar_perfil_u } from "./sites/Usuario/Editar_perfil_u";




function App() {
  return (
    <Router>
      <Routes>
        {/* General */}
        <Route path="/" element={<Inicio />} />

        <Route path="/inicio_sesion" element={<Inicio_sesion />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/recuperar_c" element={<Recuperar_c />} />
        <Route path="/recuperar_c/recuperar_e" element={<Recuperar_e />} />

        {/* ADMIN - pefil principal y menu*/}

        <Route path="/admin/inicio_a" element={<Inicio_a/>} />
        <Route path="/admin/editar_perfil" element={<Editar_perfil/>} />
        <Route path="/admin/editar_datos_perfil" element={<Editar_datos_perfil/>} />
        <Route path="/admin/editar_datos_perfil/alerta_exito" element={<Alerta_exito/>} />

        {/* Opciones de edicion del admin */}

        <Route path="/admin/curd" element={<Crud/>} />

        {/* Crud admins */ }

        <Route path="/admin/admins/actualizado_a" element={<Actualizado_a/>}/>
        <Route path="/admin/admins/admin_menu_a" element={<Admin_menu_a/>}/>
        <Route path="/admin/admins/credenciales_a" element={<Credenciales_a/>}/>
        <Route path="/admin/admins/eliminado_a" element={<Eliminado_a/>}/>
        <Route path="/admin/admins/editar_a" element={<Editar_a/>}/>
        <Route path="/admin/admins/perfil_a" element={<Perfil_a/>}/>


        {/* Crud de mesas */}
        <Route path="/admin/mesas/actualizado" element={<Actualizado_m/>}/>
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



        {/* Usuarios Paths */}

        <Route path="/usuario/home_u" element={<Home_u/>}/>
        <Route path="/usuario/mesas_reserva" element={<Mesas_reserva/>}/>
        <Route path="/usuario/reserva_u" element={<Reserva_u/>}/>
        <Route path="/usuario/cambio_reserva" element={<Cambio_reserva/>}/>
        <Route path="/usuario/error_reserva" element={<Error_reserva/>}/>
        <Route path="/usuario/reserva_cancelada" element={<Reserva_cancelada/>}/>
        <Route path="/usuario/mesas_dispoibles" element={<Mesas_dispoibles/>}/>
        <Route path="/usuario/editar_perfil_u" element={<Editar_perfil_u/>}/>




      </Routes>
    </Router>
  );
}

export default App