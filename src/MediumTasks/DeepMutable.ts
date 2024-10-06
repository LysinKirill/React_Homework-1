namespace DeepMutable {
    type DeepMutable<T> = {
        -readonly[Property in keyof T]: DeepMutable<T[Property]>
    }


    // Tests
    type TypeWithReadonly = {
        readonly name: string,
        contactInfo: {
            readonly id: number
            phoneNumber: number
            readonly address: string
        }
    }

    type TypeWithoutReadonly = DeepMutable<TypeWithReadonly>
    let obj: TypeWithoutReadonly = {
        name: "Petya",
        contactInfo: {
            id: 1,
            phoneNumber: 1,
            address: "Moscow"
        }
    }

    // Compile time check
    obj.name = "Vasya"
    obj.contactInfo.address = "Rome"
}