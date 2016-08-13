import {IShapedButton} from './IShapeButton';
import {BaseShapeButton} from './BaseShapeButton';

export class CircleButton extends BaseShapeButton implements IShapedButton {
  
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