namespace MyCapitalize {
    type MyCapitalize<T extends string> = T extends `${infer First extends string}${infer Rest}`
        ? `${Uppercase<First>}${Rest}` : never

    // Tests
    type TestCapitalize = MyCapitalize<"hello">
    type Test = AssertSameType<TestCapitalize, "Hello">

    // Compile time check
    const test: Test = true;
}