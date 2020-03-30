import {Deserializable} from "./deserializable.model";

export class Roles implements Deserializable{
    admin?: boolean;
    superadmin?: boolean;

    deserialize(input: any) {
        Object.assign(this, input);
        return this;
    }
}
