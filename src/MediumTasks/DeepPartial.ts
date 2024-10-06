namespace DeepPartial {
    type DeepPartial<T> = {
        [Property in keyof T]?: DeepPartial<T[Property]>
    }


    // Tests
    type TestType = {
        name: string,
        contactInfo: {
            id: number
            phoneNumber: number
            address: string
        }
    }

    type MyDeepPartial = DeepPartial<TestType>
    type ExpectedType = {
        name?: string;
        contactInfo?: {
            id?: number;
            phoneNumber?: number;
            address?: string;
        };
    }

    type Test = AssertSameType<MyDeepPartial, ExpectedType>

    // Compile time check
    const test: Test = true;
}

