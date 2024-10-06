namespace ParseUrlParams {
    type ParseUrlParams<StringElem extends string> =
        StringElem extends `${infer _Prefix}/:${infer Param}/${infer Rest}`
            ? Param | ParseUrlParams<`/${Rest}`>
            : (StringElem extends `${infer _Prefix}/:${infer Param}`
                ? Param
                : never);

    type params = ParseUrlParams<'posts/:id/:user/:sus'>

    // Tests
    type TestParseUrlParams = ParseUrlParams<"posts/:id/:user">
    type Test = AssertSameType<TestParseUrlParams, "id" | "user">

    // Compile time check
    const test: Test = true;
}