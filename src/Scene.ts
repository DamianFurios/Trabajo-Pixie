import { Container} from "pixi.js";
import { CatEnemy } from "./CatEnemy";
import { CatWithSword } from "./CatWithSword";import { userInterface } from "./userinterface";


export class Scene extends Container{

    constructor(){
        super();

        const Player: CatWithSword = new CatWithSword();
        const Enemy: CatEnemy = new CatEnemy();
        const Panel: userInterface = new userInterface();

        
        Enemy.position.set(1150,300);
        Player.position.set (50,300);
    
        this.addChild(Player);
        this.addChild(Enemy);
        this.addChild(Panel);
    
        
        
    }
}