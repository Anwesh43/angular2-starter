import {Component} from 'angular2/core'
import {Person} from './Person'
@Component({
   selector:'my-app',
   template:`
   <h1>Hello World {{person.name}} {{person.age}}</h1>
   <ul>
      <li *ngFor="#personObj of persons">
          Hi {{personObj.name}} who is {{personObj.age}} years old
      </li>
   </ul>`
})
export class AppComponent {
    person:Person;
    persons = [new Person("Ab1",23),new Person("Abc1",24),new Person("Abd1",25)];
    constructor() {
      this.person = new Person("Braun",25);

    }
}
