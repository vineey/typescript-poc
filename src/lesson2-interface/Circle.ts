import {IShape} from './IShape';
import {BaseShape} from './BaseShape';

export class Circle extends BaseShape implements IShape {
  
    constructor(color: string, x : number, y:number){
        super('Circle', color, x,y);
    }

    createButton(): HTMLButtonElement {
        let button = super.createButton();

        button.style.borderRadius = "30px";
        button.style.height = "50px";

        return button;
    }
}