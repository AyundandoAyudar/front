export abstract class Deserializable {
    deserialize(input: Partial<this>) {
        Object.assign(this, input);
        return this;
    }
}
