import {Component, View, NgFor, bootstrap} from 'angular2/angular2';
import {CreateTodo} from 'client/create-todo/create-todo';

@Component({
  selector: 'app'
})
@View({
  //template: "<p>Hello World!</p>"
  templateUrl: 'client/index.ng.html',
  directives: [NgFor, CreateTodo]
})
class MeteorAngular01 {
  constructor() {
    Tracker.autorun(zone.bind(() => {
      this.todos = Todos.find().fetch();
    }));
  }
}

bootstrap(MeteorAngular01);