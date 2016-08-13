export interface IShape {
    name : string;
    color : string;
    x : number;
    y : number;

    createButton(): HTMLButtonElement;
}