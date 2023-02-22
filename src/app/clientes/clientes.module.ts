import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientePrincipalComponent } from './cliente-principal/cliente-principal.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ClientePrincipalComponent
  ],
  exports: [
    ClientePrincipalComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],  
})
export class ClientesModule { }
