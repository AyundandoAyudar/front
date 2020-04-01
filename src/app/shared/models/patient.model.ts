import {Deserializable} from "./deserializable.model";

export class Patient implements Deserializable{

    name: string;
    idNumber: string;
    birth_date: Date; // < today
    email:string; // email validation
    address: string;
    addressAnnotation: string; // optional
    phoneNumber: string; // "+", "(" , ")" , " " , numeric
    otherPhone:string; // "+", "(" , ")" , " " , numeric (optional)

    deserialize(input: any) {
        Object.assign(this, input);
        return this;
    }

}
