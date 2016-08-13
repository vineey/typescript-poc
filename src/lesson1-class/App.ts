import {EventMessage} from './EventMessage';

class App {
    eventMessages : EventMessage[];
    
    constructor(eventMessages : EventMessage[]) {
        this.eventMessages = eventMessages;
    }

    init() {
        var button:HTMLButtonElement = document.createElement("button");
        button.textContent = "I AM HERE";

        for (let eventMessage of this.eventMessages) {
            button[eventMessage.event] = function () {
                console.log(eventMessage.message);
            };
        }

        document.body.appendChild(button);

    }
}

new App([
    new EventMessage("onmouseenter", "Mouse entered!"),
    new EventMessage("onmouseout", "Mouse out!"),
    new EventMessage("onmousedown", "Mouse Down!"),
    new EventMessage("onmouseup", "Mouse Up!")
]).init();
