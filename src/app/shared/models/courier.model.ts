import {Deserializable} from "./deserializable.model";

export class Courier extends Deserializable{

    id: string = null;
    name: string = null;
    idNumber: string = null;
    plate: string = null;
    vehicle: string = null;
    company: string = null;

    constructor(props?) {
        super();
        Deserializable.deserialize(this, props);
    }

}
