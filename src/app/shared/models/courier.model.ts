import {Deserializable} from "./deserializable.model";

export class Medicine implements Deserializable{

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
