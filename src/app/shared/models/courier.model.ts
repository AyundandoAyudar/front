import {Deserializable} from "./deserializable.model";

export class Courier implements Deserializable{

    id: string;
    name: string;
    idNumber: string;
    plate: string;
    vehicle: string;
    company: string;

    deserialize(input: any) {
        Object.assign(this, input);
        return this;
    }

}
