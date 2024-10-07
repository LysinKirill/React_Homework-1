namespace DeepPick {
    type DeepPick<T, Paths extends string> = Paths extends `${infer Start}.${infer Rest}`
        ? Start extends keyof T
            ? { [K in Start]: DeepPick<T[Start], Rest> }
            : never
        : Paths extends keyof T
            ? { [K in Paths]: T[K] }
            : never;
}