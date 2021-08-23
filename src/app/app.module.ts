import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DetallesUsuariosComponent } from './usuarios/detalles-usuarios.component';
import { NuevoUsuariosComponent } from './usuarios/nuevo-usuarios.component';
import { EditarUsuariosComponent } from './usuarios/editar-usuarios.component';
import { ListaUsuariosComponent } from './usuarios/lista-usuarios.component';
import { LoginComponentComponent} from './login/login-component.component'

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NuevaAsociacionComponent } from './asociacion/nueva-asociacion/nueva-asociacion.component';
import { EditarAsociacionComponent } from './asociacion/editar-asociacion/editar-asociacion.component';
import { ListarAsociacionComponent } from './asociacion/listar-asociacion/listar-asociacion.component';

@NgModule({
  declarations: [
    AppComponent,
    DetallesUsuariosComponent,
    NuevoUsuariosComponent,
    EditarUsuariosComponent,
    ListaUsuariosComponent,
    LoginComponentComponent,
    NuevaAsociacionComponent,
    EditarAsociacionComponent,
    ListarAsociacionComponent 

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    HttpClientModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
