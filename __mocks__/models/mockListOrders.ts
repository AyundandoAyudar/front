import { mockOrders } from './mockOrders';

export const mockListOrders = () =>
  new Array(30).fill(0).map(() => mockOrders());
