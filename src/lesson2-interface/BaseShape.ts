import {IShape} from './IShape';

export abstract class BaseShape implements IShape {

    constructor(public name: string, public color: string, public x: number, public y: number) {
    }

    private getOffset(el) {
        el = el.getBoundingClientRect();
        return {
            left: el.left + window.scrollX,
            top: el.top + window.scrollY
        }
    }
    
    createButton(): HTMLButtonElement {
        
        let button:HTMLButtonElement = document.createElement('button');

        button.textContent = this.name;

        button.style.backgroundColor = this.color;

        var _shape = this;
        button.onclick = function () {
            console.log(`Clicked ${_shape.color} ${_shape.name}`);
        }

        button.style.position = "absolute";

        button.style.left = this.x + "px";
        button.style.top = this.y + "px";

        return button;
    }
}