type AssertSameType<T, Expected> = (T extends Expected ? true : false) &
    (Expected extends T ? true : false);