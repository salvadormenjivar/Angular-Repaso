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
  nuevoCliente: ICliente = {
    nombre: '',
    edad: 0,
  };

  agregar() {
    if (this.nuevoCliente.nombre.length === 0) {
      return;
    }
    //console.log(this.nuevoCliente);
    this.listaClientes.push(this.nuevoCliente);
    this.nuevoCliente = {
      nombre: '',
      edad: 0,
    };
  }
}
