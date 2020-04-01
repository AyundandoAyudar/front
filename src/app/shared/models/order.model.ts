import {Deserializable} from "./deserializable.model";

export class Medicine implements Deserializable{

    orderId: bigint;
    patientIdNumber:string;
    patientName:string;
    courierId:string;
    courierName:string;
    createdDate:Date;
    scheduleDate: Date;
    deliveredDate:Date; // optional
    canceledDate:Date; // optional
    annotations:string; //optional

    deserialize(input: any) {
        Object.assign(this, input);
        return this;
    }

}
