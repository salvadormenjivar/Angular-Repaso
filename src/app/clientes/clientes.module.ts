import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientePrincipalComponent } from './cliente-principal/cliente-principal.component';
import { FormsModule } from '@angular/forms';
import { ListaComponent } from './lista/lista.component';
import { NuevoComponent } from './nuevo/nuevo.component';
import { ClienteService } from './services/cliente.service';



@NgModule({
  declarations: [
    ClientePrincipalComponent,
    ListaComponent,
    NuevoComponent
  ],
  exports: [
    ClientePrincipalComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],  
  providers:[
    ClienteService
  ]
})
export class ClientesModule { }
