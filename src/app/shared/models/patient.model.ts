import { Deserializable } from './deserializable.model';

export class Patient extends Deserializable {
  id: string = null;
  name: string = null;
  idNumber: string = null;
  docType: string = null;
  birth_date: Date = null; // < today
  email: string = null; // email validation
  address: string = null;
  addressAnnotation: string = null; // optional
  phoneNumber: string = null; // "+", "(" , ")" , " " , numeric
  otherPhone: string = null; // "+", "(" , ")" , " " , numeric (optional)

  constructor(props?) {
    super();
    Deserializable.deserialize(this, props);
  }
}
