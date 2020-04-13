import {Deserializable} from "./deserializable.model";

export class Order extends Deserializable{

    id: string = null;
    orderId: bigint = null;
    patientIdNumber:string = null;
    patientName:string = null;
    courierId:string = null;
    courierName:string = null;
    createdDate:Date = null;
    scheduleDate: Date = null;
    deliveredDate:Date = null; // optional
    canceledDate:Date = null; // optional
    annotations:string = null; //optional
    deleted_at:Date = null;

    constructor(props?) {
        super();
        Deserializable.deserialize(this, props);
    }
}
