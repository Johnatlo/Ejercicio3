import { Component, OnInit } from '@angular/core';
import { DatosService } from 'src/app/services/datos.service';

@Component({
  selector: 'app-numeros',
  templateUrl: './numeros.component.html',
  styleUrls: ['./numeros.component.css'],
})

export class NumerosComponent implements OnInit {

  numero: number;

  constructor(private service: DatosService) {}

  ngOnInit(): void {

    this.getNumero();

  }

  /**
   * @author Jhonathan Lopez
   * @fecha 28/06/2022
   * Metodo que se encarga de recibir el numero aleatorio del servicio tipo get
   */
  getNumero(): void {
    this.service.getNumbers().subscribe((resp) => {
      this.numero = resp;
    });
  }

}
