import {IShapedButton} from './IShapeButton';
import {BaseShapeButton} from './BaseShapeButton';

export class RectangleButton extends BaseShapeButton implements IShapedButton {
  
    constructor(color: string, x : number, y:number){
        super('Square', color, x, y);
    }

}