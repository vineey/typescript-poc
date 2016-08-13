import {Circle} from './Circle';
import {Square} from './Square';
import {IShape} from './IShape';

class App {
    private shapes: IShape[];

    constructor(shapes: IShape[]) {
        this.shapes = shapes;
    }

    init() {
        for (let shape of this.shapes) {
            document.body.appendChild(shape.createButton());
        }
    }
}

new App([
    new Circle("blue", 10, 10),
    new Circle("red", 200, 10),
    new Square("green", 20, 100),
    new Square("yellow", 300, 100)
]).init();