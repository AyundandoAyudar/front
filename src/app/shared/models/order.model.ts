import { Deserializable } from './deserializable.model';

export enum OrderStatus {
  Open = 'abierta',
  Closed = 'cerrada',
  Failed = 'fallida',
}

export class OrderMedicine {
  constructor(props?: Partial<OrderMedicine>) {
    Deserializable.deserialize(this, props);
  }

  medicineId: string = null;
  name: string = null;
  packaging: string = null;
  quantity: number = null; // > 0
}
export class Order extends Deserializable {
  id: string = null;
  orderId: bigint = null;
  patientIdNumber: string = null;
  patientName: string = null;
  courierId: string = null;
  courierName: string = null;
  createdDate: Date = null;
  scheduleDate: Date = null;
  status: OrderStatus = OrderStatus.Open;
  deliveredDate: Date = null; // optional
  canceledDate: Date = null; // optional
  annotations: string = null; // optional
  medicines: OrderMedicine[] = null;
  deleted_at: Date = null;

  constructor(props?) {
    super();
    Deserializable.deserialize(this, props);
    this.deserializeDates();
  }

  deserializeDates() {
    Object.keys(this).forEach((key) => {
      if (this[key] && this[key].toDate) {
        this[key] = this[key].toDate();
      }
    });
  }
}
