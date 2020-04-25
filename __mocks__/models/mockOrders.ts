import { Order } from '../../src/app/shared/models/order.model';
import * as faker from 'faker';

export const mockOrders = (
  props: Partial<Order> = {
    id: `no-valid-order-id-123-asd-${faker.random.number()}`,
    orderId: faker.random.number(),
    patientIdNumber: `no-valid-patientIdNumber-123-asd-${faker.random.number()}`,
    patientName: `${faker.name.firstName()} ${faker.name.lastName()}`,
    courierId: `no-valid-courierId-123-asd-${faker.random.number()}`,
    courierName: `${faker.name.firstName()} ${faker.name.lastName()}`,
    createdDate: faker.date.past(),
    scheduleDate: faker.date.past(),
    deliveredDate: faker.date.past(),
    canceledDate: faker.date.past(),
    annotations: faker.lorem.sentences(),
  }
) => new Order(props);
