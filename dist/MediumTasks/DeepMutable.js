"use strict";
var DeepMutable;
(function (DeepMutable) {
    let obj = {
        name: "Petya",
        contactInfo: {
            id: 1,
            phoneNumber: 1,
            address: "Moscow"
        }
    };
    // Compile time check
    obj.name = "Vasya";
    obj.contactInfo.address = "Rome";
})(DeepMutable || (DeepMutable = {}));
