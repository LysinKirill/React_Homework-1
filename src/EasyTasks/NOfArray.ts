namespace NOfArray {
    // 0-indexed
    type NOfArray<ArrayObj extends any[], N extends number> = ArrayObj[N];

    // Tests
    type TestArray = ['hello', 5, object]

    type Test1 = AssertSameType<NOfArray<TestArray, 0>, TestArray[0]>;
    type Test2 = AssertSameType<NOfArray<TestArray, 1>, TestArray[1]>;
    type Test3 = AssertSameType<NOfArray<TestArray, 2>, TestArray[2]>;

    // Compile time check
    const test: Test1 = true;
    const test2: Test2 = true;
    const test3: Test3 = true;
}