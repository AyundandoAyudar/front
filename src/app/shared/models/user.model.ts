import {Roles} from "./roles.model";
import {Deserializable} from "./deserializable.model";

export class User extends Deserializable{
    email: string;
    roles: Roles;

    deserialize(input: Partial<this>) {
        super.deserialize(input);
        this.roles = new Roles().deserialize(input.roles);
        return this;
    }

}
