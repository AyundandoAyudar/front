import { Deserializable } from './deserializable.model';

export class Medicine extends Deserializable {
  id: string = null;
  name: string = null; // upper case
  packaging: string = null;
  invima: string = null; // optional
  components: string = null;
  annotations: string = null; // optional
  deleted_at: Date = null;

  constructor(props?) {
    super();
    Deserializable.deserialize(this, props);
  }
}
