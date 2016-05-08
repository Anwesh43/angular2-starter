System.register(['angular2/core', './Person'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, Person_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (Person_1_1) {
                Person_1 = Person_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.persons = [new Person_1.Person("Ab1", 23), new Person_1.Person("Abc1", 24), new Person_1.Person("Abd1", 25)];
                    this.person = new Person_1.Person("Braun", 25);
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n   <h1>Hello World {{person.name}} {{person.age}}</h1>\n   <ul>\n      <li *ngFor=\"#personObj of persons\">\n          Hi {{personObj.name}} who is {{personObj.age}} years old\n      </li>\n   </ul>"
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=appComponent.js.map