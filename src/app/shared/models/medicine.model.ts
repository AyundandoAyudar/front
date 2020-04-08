import {Deserializable} from "./deserializable.model";

export class Medicine extends Deserializable{

    id: string;
    name:string; // upper case
    packaging: string;
    invima:string; // optional
    components:string;
    annotations:string; // optional

}
