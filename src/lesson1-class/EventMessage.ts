export class EventMessage {
    
    event : string;
    message : string;
    
    constructor(event:string, message:string) {
        this.event = event;
        this.message = message;
    } 

    getEvent() : string {
        return this.event;
    }

    getMessage() : string {
        return this.message;
    }
}