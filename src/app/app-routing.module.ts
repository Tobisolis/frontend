import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditarUsuariosComponent } from './usuarios/editar-usuarios.component';
import { ListaUsuariosComponent } from './usuarios/lista-usuarios.component';
import { NuevoUsuariosComponent } from './usuarios/nuevo-usuarios.component';
import { LoginComponentComponent } from './login/login-component.component';

const routes: Routes = [
  {path: '', component: ListaUsuariosComponent},
  {path: 'detalle/:id', component: ListaUsuariosComponent},
  {path: 'nuevo', component: NuevoUsuariosComponent},
  {path: 'update/:id', component: EditarUsuariosComponent},
  {path: 'login', component: LoginComponentComponent},
  {path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
