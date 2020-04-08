export abstract class Deserializable {

    constructor() {
    }

    static deserialize<T>( that : T , input : Partial<T> = {}) {

        Object.keys(that).forEach((key) => {
            if (input[key] !== undefined) {
                that[key] = input[key];
            }
        });
    }
}
