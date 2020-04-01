import {Deserializable} from "./deserializable.model";

export class Medicine implements Deserializable{
    name:string; // upper case
    packaging: string;
    invima:string; // optional
    components:string;
    annotations:string; // optional

    deserialize(input: any) {
        Object.assign(this, input);
        return this;
    }

}
