import {Deserializable} from "./deserializable.model";

export class Roles extends Deserializable{
    admin?: boolean = null;
    superadmin?: boolean = null;

    constructor(props?) {
        super();
        Deserializable.deserialize(this, props);
    }

}
