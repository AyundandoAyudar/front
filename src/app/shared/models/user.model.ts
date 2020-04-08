import {Roles} from "./roles.model";
import {Deserializable} from "./deserializable.model";

export class User extends Deserializable{
    email: string = null;
    roles: Roles = null;

    constructor(props?) {
        super();
        Deserializable.deserialize(this, props);
    }

}
