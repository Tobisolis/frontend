import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { UsuariosComponent } from './usuarios/usuarios.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {MatTableModule} from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';


import { AsociacionComponent } from './asociacion/asociacion.component';
import { ConfirmDialogComponent } from './asociacion/dialogo/confirm-dialog/confirm-dialog.component';
import { ModelAsociacionComponent } from './asociacion/model-asociacion/model-asociacion.component';

import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { RegistrarAsociacionComponent } from './asociacion/registrar-asociacion/registrar-asociacion.component';
import { ModelUsuariosComponent } from './usuarios/model-usuarios/model-usuarios.component';
import { DialogUsuariosComponent } from './usuarios/dialog-usuarios/dialog-usuarios.component';
import { RegistrarUsuariosComponent } from './usuarios/registrar-usuarios/registrar-usuarios.component';

@NgModule({
  declarations: [
    AppComponent,
    UsuariosComponent,
    AsociacionComponent,
    ConfirmDialogComponent,
    ModelAsociacionComponent,
    RegistrarAsociacionComponent,
    ModelUsuariosComponent,
    DialogUsuariosComponent,
    RegistrarUsuariosComponent,
    

   

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    HttpClientModule,
    FormsModule,
    MatTableModule,
    MatFormFieldModule,
    MatSelectModule,
    MatDialogModule,
    FormsModule,
    MatInputModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
