//import { TestBed } from '@angular/core/testing';

import { ImageService } from './image.service';

describe('ImageService', () => {
  let service: ImageService;

  beforeEach(() => {
    //TestBed.configureTestingModule({});
    service = new ImageService();
  });

  it('Debe crearse el servicio', () => {
    expect(service).toBeTruthy();
  });

  describe('getImages', () => {
    it('Cuando se llame el método entonces debe retornar todas las imágenes (5)', () => {
      let resp = service.getImages();

      expect(resp.length).toBe(5);
    });
  });

  describe('getImage', () => {
    it('Cuando se envíe 3 (que está dentro de la lista) entonces debe retornar este elemento', () => {
      const id = 3;

      let resp = service.getImage(id);

      expect(resp.brand).toBe('gato');
      expect(resp.url).toBe('assets/images/gato1.jpg');
    });  

    it('Cuando se envíe 7 (que no está dentro de la lista) entonces debe retornar indefinido', () => {
      const id = 7;

      let resp = service.getImage(id);
      
      expect(resp).toBeUndefined();
    }); 
  });  
});
