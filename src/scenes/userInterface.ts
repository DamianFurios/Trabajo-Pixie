import { Container, NineSlicePlane, Sprite, Texture, Text } from "pixi.js";
import { Button } from "../UI/Button";
import { Keyboard } from "../utils/Keyboard";

export class userInterface extends Container{

    private NextLevel:Button;
    private TextCoins:Text;

        constructor(){
            super();

            const panel = new NineSlicePlane(
                Texture.from("panel_azul"),
                35,35,35,35
            );
            
            const boton1 = new NineSlicePlane(
                Texture.from("boton_azul"),
                20,20,20,20
            );
            const boton2 = new NineSlicePlane(
                Texture.from("boton_azul"),
                20,20,20,20
            );

            const banner: Sprite = Sprite.from("banner");
            const coins: Sprite = Sprite.from("coins");
            const cash: Sprite = Sprite.from("cash");

            const StarFilled1: Sprite = Sprite.from("StarFilled");
            const StarFilled2: Sprite = Sprite.from("StarFilled");
            const StarMissing: Sprite = Sprite.from("StarMissing");

            ///////////BOTON
            this.NextLevel = new Button(Texture.from("arrowRight"),
                Texture.from("arrowRight"),
                Texture.from("arrowRight"),
                1.2);
            this.NextLevel.on("buttonClick", this.NextLevelClick, this);
             const RepeatLevel: Sprite = Sprite.from("return");
           


            panel.width = 230;
            panel.height = 300;
            panel.pivot.set(115,150);
            panel.position.set(640,400);

            boton1.width = 190;
            boton1.height = 60;
            boton1.pivot.set(boton1.width/2 , boton1.height/2);
            boton1.position.set(640,500);

            boton2.height = 60;
            boton2.width = 190;
            boton2.pivot.set(boton1.width/2 , boton1.height/2);
            boton2.position.set(640,430);

            banner.scale.set(0.2,0.2);
            //banner.pivot.set(banner.width/2 , banner.height/2);
            banner.position.set(512,200);

            coins.scale.set(0.01,0.01);
            coins.position.set(550,410);

            cash.scale.set(0.03,0.03);
            cash.position.set(545,475);

            StarFilled1.pivot.set(StarFilled1.width/2,StarFilled1.height/2);
            StarFilled1.position.set(panel.position.x-65,340);

            StarFilled2.pivot.set(StarFilled1.width/2,StarFilled1.height/2);
            StarFilled2.position.set(panel.position.x+65,340);

            StarMissing.pivot.set(StarFilled1.width/2,StarFilled1.height/2);
            StarMissing.position.set(panel.position.x+30,355);

            StarFilled1.scale.set(0.025,0.025);
            StarFilled2.scale.set(0.025,0.025);
            StarMissing.scale.set(0.05,0.05);


            this.NextLevel.pivot.set(this.NextLevel.width /2, this.NextLevel.height/2)
            this.NextLevel.position.set(700,590);
            RepeatLevel.pivot.set(RepeatLevel.width/2,RepeatLevel.height/2);
            RepeatLevel.position.set(585,585);

            //Sound///////////////////////////////////////////////////////////////
                
            //KEYBOARD///////////////////////////////////////////////////////////
 




            // TEXT
        const TextNivel: Text = new Text("Nivel 1",{fontSize: 30, fontFamily: "Comic Sans MS"})
        TextNivel.pivot.set(TextNivel.width/2,TextNivel.height/2);
        TextNivel.position.set(640,253);
     
    
        this.TextCoins = new Text("80",{fontSize: 35, fontFamily: "Comic Sans MS"})
        this.TextCoins.pivot.set(this.TextCoins.width/2,this.TextCoins.height/2);
        this.TextCoins.position.set(695,boton2.position.y);

        const TextCash: Text = new Text("256895",{fontSize: 35, fontFamily: "Comic Sans MS"})
        TextCash.pivot.set(TextCash.width/2,TextCash.height/2);
        TextCash.position.set(boton1.position.x+15,boton1.position.y);
        
            this.addChild(panel);
            this.addChild(boton1);
            this.addChild(boton2);
            this.addChild(banner);
            this.addChild(coins);
            this.addChild(cash);
            this.addChild(TextCash);
            this.addChild(this.TextCoins);
            this.addChild(TextNivel);
            this.addChild(StarFilled1);
            this.addChild(StarFilled2);
            this.addChild(StarMissing);

            this.addChild(this.NextLevel);
            this.addChild(RepeatLevel);

            Keyboard.down.on("KeyZ", this.onKeyB, this);
            Keyboard.up.on("KeyZ", this.onKeyBUP, this);


        }

    private onKeyB():void{
        console.log("aprete la b", this);
    }
    private onKeyBUP():void{
        console.log("solte la b", this);
    }


    private NextLevelClick():void{
    console.log("kakotagorda", this);
    }

}