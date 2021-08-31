import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { EditarUsuariosComponent } from './usuarios/editar-usuarios.component';
// import { ListaUsuariosComponent } from './usuarios/lista-usuarios.component';
// import { NuevoUsuariosComponent } from './usuarios/nuevo-usuarios.component';

import { UsuariosComponent } from './usuarios/usuarios.component';
import { AsociacionComponent } from './asociacion/asociacion.component'
import { RegistrarAsociacionComponent } from './asociacion/registrar-asociacion/registrar-asociacion.component';
import { RegistrarUsuariosComponent } from './usuarios/registrar-usuarios/registrar-usuarios.component';

const routes: Routes = [
  {path: '', component: AsociacionComponent},
  // {path: 'detalle/:id', component: ListaUsuariosComponent},
  // {path: 'nuevo', component: NuevoUsuariosComponent},
  // {path: 'update/:id', component: EditarUsuariosComponent},
  {path: 'usuarios', component: UsuariosComponent},
  {path: 'asosciacion-laboral', component: AsociacionComponent},
  {path: 'reigstrar-asosciacion', component: RegistrarAsociacionComponent},
  {path: 'reigstrar-usuarios', component: RegistrarUsuariosComponent},
  {path: '**', redirectTo: '', pathMatch: 'full'}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
