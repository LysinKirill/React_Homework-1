namespace MyPick {
    type MyPick<Type, Keys extends keyof Type> = {
        [Property in Keys]: Type[Property];
    }

    // Tests
    type TestType = {
        integerProperty: number;
        stringProperty: string;
        arrayProperty: [string];
    };

    type PickedType = MyPick<TestType, 'integerProperty' | 'arrayProperty'>;
    type ExpectedType = Pick<TestType, 'integerProperty' | 'arrayProperty'>;

    type Test = AssertSameType<PickedType, ExpectedType>

    // Compile time check
    const test: Test = true;
}