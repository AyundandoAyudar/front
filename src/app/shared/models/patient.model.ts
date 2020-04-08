import {Deserializable} from "./deserializable.model";

export class Patient extends Deserializable{

    id: string;
    name: string;
    idNumber: string;
    birth_date: Date; // < today
    email:string; // email validation
    address: string;
    addressAnnotation: string; // optional
    phoneNumber: string; // "+", "(" , ")" , " " , numeric
    otherPhone:string; // "+", "(" , ")" , " " , numeric (optional)

}
