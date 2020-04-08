import {Deserializable} from "./deserializable.model";

export class Order extends Deserializable{

    id: string;
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

}
