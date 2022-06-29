import { Injectable } from '@angular/core';
import { interval, Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DatosService {
  constructor() {}

  /**
   * @author Jhonathan Lopez
   * @fecha 28/06/2022
   * Servicio que se encarga de enviar un numero aleatorio entre 0 a 10 cada segundo
   */
  getNumbers(): Observable<number> {
    return interval(1000).pipe(map(() => 1 + Math.floor(Math.random() * 10)));
  }
}
