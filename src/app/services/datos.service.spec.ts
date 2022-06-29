import { TestBed } from '@angular/core/testing';

import { DatosService } from './datos.service';

describe('DatosService', () => {
  let service: DatosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Revisar que el numero aleatorio si sea un numero', () => {
    let num = service.getNumbers().subscribe;
    expect(num).toMatch(/\d{1,}/);
  })

});
