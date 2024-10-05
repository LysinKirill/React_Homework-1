namespace Unshift {
    type Unshift<ArrayType extends any[], Elem> = [Elem, ...ArrayType]

    // Tests
    type IntArray = number[]
    type UnshiftArray = Unshift<IntArray, string>

    type Test = AssertSameType<UnshiftArray, [string, ...number[]]>;

    // Compile time check
    const test1: Test = true;
    const test2: Unshift<boolean[], string> = ['string', true, true]
}
