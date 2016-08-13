import {CircleButton} from './CircleButton';
import {RectangleButton} from './SquareButton';
import {IShapedButton} from './IShapeButton';

class App {
    private shapes: IShapedButton[];

    constructor(shapes: IShapedButton[]) {
        this.shapes = shapes;
    }

    init() {
        for (let shape of this.shapes) {
            document.body.appendChild(shape.createButton());
        }
    }
}

new App([
    new CircleButton("blue", 10, 10),
    new CircleButton("red", 200, 10),
    new RectangleButton("green", 20, 100),
    new RectangleButton("yellow", 300, 100)
]).init();