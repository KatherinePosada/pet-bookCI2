import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { GalleryComponent } from './image-gallery.component';
import { ImageService } from '../image.service';
import { FilterimagesPipe } from '../filterimages.pipe';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('ImageGalleryComponent', () => {
  let component: GalleryComponent;
  let fixture: ComponentFixture<GalleryComponent>;
  let imageService: ImageService = new ImageService();
  let submitButton: DebugElement;
  let spy: any;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [GalleryComponent, FilterimagesPipe],
      providers: [{provide: ImageService, useValue: imageService}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    spy = spyOn(imageService, 'getImages').and.returnValues([
      { "id": 1, "brand": "perro", "url": "assets/images/perro1.jpg" },    
      { "id": 2, "brand": "perro", "url": "assets/images/perro2.jpg" },
      { "id": 3, "brand": "gato", "url": "assets/images/gato1.jpg" },
      { "id": 4, "brand": "gato", "url": "assets/images/gato2.jpeg" },
      { "id": 5, "brand": "perro", "url": "assets/images/perro3.jpg" },
    ]);

    fixture = TestBed.createComponent(GalleryComponent); //permite hacer pruebas del dom
    component = fixture.componentInstance; //parte de typescript dentro del componente
    fixture.detectChanges(); //detecta los cambios realizados por haber instanciado el componente
  });

  it('Debe crear el componente', () => {
    expect(component).toBeTruthy();
  });

  describe('fixture', () => {      

    it('Cuando se carga la vista, debe exisitr un contenedor de imágen con la clase .img', () => {
      const clase = '.img';

      let resp = fixture.nativeElement;
      
      expect(resp.querySelector(clase)).toBeTruthy();
    });

    it("Cuando se carga la vista, debe verificar el valor el valor 'deshabilitado' de los botones", () => {
      const valor = false;

      let resp = fixture.debugElement.query(By.css('button'));      
      
      expect(resp.properties.disabled).toEqual(valor);
    });
    
    it("Cuando se carga la vista, la propiedad de estilo 'display' de los li debe estar en 'inline'", () => {
      const valor = 'inline';

      let resp = fixture.debugElement.query(By.css('li')).nativeElement;   
      let styles = window.getComputedStyle(resp);
      
      expect(styles.display).toEqual(valor);
    });

    
    it('Cuando se carga la vista, la imagen con id=img1 debe cargar la imagen del perro1', () => {
      const id = '#img1'
      expect(fixture.nativeElement.querySelector(id).src).toContain('assets/images/perro1.jpg');
    });

    it(`En el header debe aparecer el texto 'Pet Book Prueba Devops'`, () => {
      const header = '.header';
      const expectText = 'Pet Book Prueba Devops';
      const div = fixture.debugElement.query(By.css(header));
      expect(div.nativeElement.textContent.trim()).toBe(expectText)
    });

    it(`En el header debe existir texto, no puede estar vacío (''), como existe texto debe fallar`, () => {
      const header = '.header';
      const div = fixture.debugElement.query(By.css(header));
      expect(div.nativeElement.textContent.trim()).not.toEqual('');
    });

  });

  describe("ngOnChanges", () => {
    it('Cuando la lista de imágenes existe en la galería debe coincidir con la cantidad de imágenes existentes', () => {
      const cant = 5;

      let resp = component.allImages;
      
      expect(resp.length).toBe(cant);
    });

    it('Cuando la lista de imágenes existe verifica que contenga un elemento en particular', () => {
      const elem = { "id": 4, "brand": "gato", "url": "assets/images/gato2.jpeg" };

      let resp = component.allImages;

      expect(resp).toContain(elem);
    });

    it('Cuando se llama la lista ´images´ (no está en uso) del componente, debe retornar indefinido', () => {
      let resp = component.images;

      expect(resp).toBeUndefined();
    });
  });
});
