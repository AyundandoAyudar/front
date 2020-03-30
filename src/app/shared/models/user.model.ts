import {Roles} from "./roles.model";
import {Deserializable} from "./deserializable.model";

export class User implements Deserializable{
    email: string;
    roles: Roles;

    deserialize(input: any) {
        Object.assign(this, input);
        this.roles = new Roles().deserialize(input.roles);
        return this;
    }

}
