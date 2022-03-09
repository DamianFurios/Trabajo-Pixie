import { Application, Loader, Sprite } from 'pixi.js'

const app = new Application({
	view: document.getElementById("pixi-canvas") as HTMLCanvasElement,
	resolution: window.devicePixelRatio || 1,
	autoDensity: true,
	backgroundColor: 0x6495ed,
	width: 640,
	height: 480
});

 // const myLoader = new Loader(); // una forma de agregar un loader
 Loader.shared.add({url: "jarro.jpg", name: "myJar"});
 Loader.shared.add({url: "gato.png", name: "gato"});

 Loader.shared.onComplete.add(()=>{
	 
	 const clampy: Sprite = Sprite.from("gato.png");
	 const jarro: Sprite = Sprite.from("myJar");
	 
	 console.log("Dimensones gato", clampy.width, clampy.height);
	 console.log("Dimensiones jarro", jarro.width, jarro.height);
	 // clampy.anchor.set(0.5);
	 
	 clampy.x = 0; 
	 clampy.y = app.screen.height / 2;
	 
	 jarro.x = app.screen.width / 2; 
	 jarro.y = app.screen.height / 2;
	 
	 app.stage.addChild(clampy); 
	 app.stage.addChild(jarro); 

 });

 Loader.shared.load();



