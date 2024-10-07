namespace Camelize {
    type CamelizeString<Str extends string> = Str extends `${infer First}_${infer Rest}`
        ? `${First}${Capitalize<CamelizeString<Rest>>}`
        : Str;

    type Camelize<ObjType> = ObjType extends object
        ? {
            [Key in keyof ObjType as CamelizeString<Key & string>]: Camelize<ObjType[Key]>;
        }
        : ObjType;

    type TestType = {
        first_name: string;
        last_name: string;
        address: {
            street_name: string;
            zip_code: number;
        };
        nested_array: {
            item_name: string;
            item_value: number;
        }[];
    };

    type CamelizedTestType = Camelize<TestType>;

    const testObject: CamelizedTestType = {
        firstName: "1",
        lastName: "2",
        address: {
            streetName: "3",
            zipCode: 123,
        },
        nestedArray: [{
            itemName: "test",
            itemValue: 123
        }]
    };
}