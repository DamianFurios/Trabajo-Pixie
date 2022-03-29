import { Sprite } from "pixi.js";
import { Container } from "pixi.js";

export class CatEnemy extends Container {

    constructor (){
        super();
     const catEnemy: Sprite = Sprite.from("catenemy");
	 const halberd: Sprite = Sprite.from("halberd");
	 	 
	 catEnemy.scale.set(-0.4,0.4);

	 halberd.scale.set(-0.3,0.2);
	 halberd.position.x += 100;
	 halberd.position.y += 100;
	 halberd.angle = 70;
          
	 this.addChild(catEnemy);
	 this.addChild(halberd);

	 
    }
}
