export interface IShapedButton {
    name : string;
    color : string;
    x : number;
    y : number;

    createButton(): HTMLButtonElement;
}