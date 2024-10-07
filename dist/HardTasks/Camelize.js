"use strict";
var Camelize;
(function (Camelize) {
    let m = {
        firstName: "1",
        lastName: "2",
        address: {
            streetName: "3",
            zipCode: 123,
        },
        nestedArray: [{
                itemName: "faaf",
                itemValue: 123
            }]
    };
    const test = true;
})(Camelize || (Camelize = {}));
