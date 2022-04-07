import { Container, Sprite, Texture } from "pixi.js";

export class Button extends Container {

    private def:Texture;
    private down:Texture;
    private over:Texture;


    private sprScale:number;

    private spr:Sprite;

    constructor(def:Texture, down:Texture, over:Texture, sprScale:number = 1){
        super();
        this.def = def;
        this.down = down;
        this.over = over;

        this.sprScale = sprScale;

        this.spr = Sprite.from(def);
       // this.spr.anchor.set(0,5);
        this.addChild(this.spr);

        this.spr.interactive = true;
        this.spr.on("mousedown", this.onMouseDown, this);
        this.spr.on("mouseup", this.onMouseUp, this);
        this.spr.on("mouseover", this.onMouseOver, this);
        this.spr.on("mouseout", this.onMouseOut, this);

    }

    private onMouseDown():void{
        this.spr.texture = this.down;
        this.spr.scale.set(this.sprScale);

        
    }
    private onMouseUp():void{
        this.emit("buttonClick");
        this.spr.texture = this.over;
        this.spr.scale.set(this.sprScale);

    }

    private onMouseOver():void{
        this.spr.texture = this.over;
        this.spr.scale.set(this.sprScale);

    }
    private onMouseOut():void{
        this.spr.texture = this.def;
        this.spr.scale.set(1);
    }

}