import {Component} from 'angular2/core'
@Component({
   selector:'my-app',
   template:'<h1>Hello {{name}} {{age}}</h1>'
})
export class AppComponent {
   constructor() {
     this.name = "Anwesh";
     this.age = 23;
   }
}
