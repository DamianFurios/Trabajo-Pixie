import { Container } from 'pixi.js';
import { Application, Loader, Sprite } from 'pixi.js'

const app = new Application({
	view: document.getElementById("pixi-canvas") as HTMLCanvasElement,
	resolution: window.devicePixelRatio || 1,
	autoDensity: true,
	backgroundColor: 0x6495ed,
	width: 1280,
	height: 720
});

// Evento para reescalar la pantalla
window.addEventListener("resize", ()=>{
	const scaleX = window.innerWidth / app.screen.width;
	const scaleY = window.innerHeight / app.screen.height;
	const scale  = Math.min(scaleX, scaleY);

	const gameWidth = Math.round(app.screen.width * scale);
	const gameHeight = Math.round(app.screen.height * scale);

	const marginHorizontal = Math.floor((window.innerWidth - gameWidth) /2 );
	const marginVertical = Math.floor((window.innerHeight - gameHeight) /2 );

	app.view.style.width = gameWidth + "px";
	app.view.style.height = gameHeight + "px";

	app.view.style.marginLeft = marginHorizontal + "px";
	app.view.style.marginRight = marginHorizontal + "px";

	app.view.style.marginTop = marginVertical + "px";
	app.view.style.marginBottom = marginVertical + "px";

});
window.dispatchEvent(new Event("resize"));




 // const myLoader = new Loader(); // una forma de agregar un loader
 Loader.shared.add({url: "gato.png", name: "gato"});

 Loader.shared.onComplete.add(()=>{
	 
	 const gato: Sprite = Sprite.from("gato.png");
	 const sword: Sprite = Sprite.from("espada.png");
	 const catEnemy: Sprite = Sprite.from("CatEnemy.png");
	 const halberd: Sprite = Sprite.from("halberd.png");
	 

	 gato.scale.set(0.35,0.35);

	 catEnemy.scale.set(-0.4,0.4);

	 sword.scale.set(0.1,0.1);
	 sword.position.set(160,0);

	 halberd.scale.set(-0.3,0.2);
	 halberd.position.x += 100;
	 halberd.position.y += 100;
	 halberd.angle = 70;
	

	 
	const CatWhithSword: Container = new Container();

	CatWhithSword.scale.set (1.5,1.5);
	CatWhithSword.position.set (300,300);

	 CatWhithSword.addChild(gato); 
	 CatWhithSword.addChild(sword); 

	 const CatEnemyWithWeapon: Container = new Container();

	 CatEnemyWithWeapon.addChild(catEnemy);
	 CatEnemyWithWeapon.addChild(halberd);

	 CatEnemyWithWeapon.position.set(900,300);



	

	app.stage.addChild(CatWhithSword);
	app.stage.addChild(CatEnemyWithWeapon);
	

 });

 Loader.shared.load();



