import { Component } from '@angular/core';
import { ICliente } from '../interfaces/cliente.interface';
import { ClienteService } from '../services/cliente.service';

@Component({
  selector: 'app-cliente-principal',
  templateUrl: './cliente-principal.component.html',
  styleUrls: ['./cliente-principal.component.css'],
})
export class ClientePrincipalComponent {

  get listaClientes(){
    return this.clienteService.listaClientes;
  }
  
  constructor(private clienteService:ClienteService){}
}
