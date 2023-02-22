import { Component } from '@angular/core';
import { ICliente } from '../interfaces/cliente.interface';

@Component({
  selector: 'app-cliente-principal',
  templateUrl: './cliente-principal.component.html',
  styleUrls: ['./cliente-principal.component.css'],
})
export class ClientePrincipalComponent {
  listaClientes: ICliente[] = [
    {
      nombre: 'Salvador',
      edad: 15,
    },
    {
      nombre: 'Rodri',
      edad: 25,
    },
  ];
}
