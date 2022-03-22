import { Container, Sprite } from "pixi.js";


export class CatWithSword extends Container {


    constructor(){
        super();

    const gato: Sprite = Sprite.from("gato");
    const sword: Sprite = Sprite.from("espada");

    gato.scale.set(0.35,0.35);
 
    sword.scale.set(0.1,0.1);
    sword.position.set(160,0);

    this.scale.set (1.5,1.5);

    this.addChild(gato); 
    this.addChild(sword); 
   

    }
}