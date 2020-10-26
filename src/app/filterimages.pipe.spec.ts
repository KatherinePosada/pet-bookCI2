import { FilterimagesPipe } from './filterimages.pipe';

describe('FilterimagesPipe', () => {
	let pipe: FilterimagesPipe;

	beforeEach(() => {
		pipe = new FilterimagesPipe();
	});
	
  describe('transform', ()=> {
	const imagesdelatils = [    
    	{ "id": 1, "brand": "perro", "url": "assets/images/perro1.jpg" },    
		{ "id": 2, "brand": "perro", "url": "assets/images/perro2.jpg" },
    	{ "id": 3, "brand": "gato", "url": "assets/images/gato1.jpg" },
    	{ "id": 4, "brand": "gato", "url": "assets/images/gato2.jpeg" },
    	{ "id": 5, "brand": "perro", "url": "assets/images/perro3.jpg" },
	]

  	it('should give me the 5 existing pictures when I filter by all', ()=>{
  		expect(pipe.transform(imagesdelatils, 'all').length).toBe(5);
  	});

  	it('should give me the 3 pictures when I filter by perro', ()=>{
  		expect(pipe.transform(imagesdelatils, 'perro').length).toBe(3);
  	});

  	it('should give me none when I filter by jklñ', ()=>{
  		expect(pipe.transform(imagesdelatils, 'jklñ').length).toBe(0);
  	});
  });
});
