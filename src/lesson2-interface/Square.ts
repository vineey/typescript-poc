import {IShape} from './IShape';
import {BaseShape} from './BaseShape';

export class Square extends BaseShape implements IShape {
  
    constructor(color: string, x : number, y:number){
        super('Square', color, x, y);
    }

}