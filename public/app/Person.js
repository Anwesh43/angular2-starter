System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Person;
    return {
        setters:[],
        execute: function() {
            Person = (function () {
                function Person(name, age) {
                    this.name = name;
                    this.age = age;
                }
                return Person;
            }());
            exports_1("Person", Person);
        }
    }
});
//# sourceMappingURL=Person.js.map