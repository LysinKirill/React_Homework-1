namespace MyExclude {
    type MyExclude<T, U> = T extends U ? never : T;

    // Tests
    type TestType = 'a' | string | number | boolean
    type ModifiedType = MyExclude<TestType, string | boolean>

    type Test = AssertSameType<ModifiedType, 'a' | number>;

    // Compile time check
    const test: Test = true;
}