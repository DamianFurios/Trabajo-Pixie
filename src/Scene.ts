import { Container } from "pixi.js";
import { CatEnemy } from "./CatEnemy";
import { CatWithSword } from "./CatWithSword";

export class Scene extends Container{

    constructor(){
        super();

        const Player: CatWithSword = new CatWithSword();
        const Enemy: CatEnemy = new CatEnemy();
        
        Enemy.position.set(1150,300);
        Player.position.set (50,300);
    
        this.addChild(Player);
        this.addChild(Enemy);
        
    }
}