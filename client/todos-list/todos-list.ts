import {Component, View, NgFor} from 'angular2/angular2';
import {routerDirectives} from 'angular2/router';
import {CreateTodo} from 'client/create-todo/create-todo';

@Component({
  selector: 'todos-list'
})
@View({
  templateUrl: 'client/todos-list/todos-list.ng.html',
  directives: [NgFor, routerDirectives, CreateTodo]
})
export class TodosList {
  constructor() {
    Tracker.autorun(zone.bind(() => {
      this.todos = Todos.find().fetch();
    }));
  }
  remove(todo) {
    Todos.remove(todo._id);
  }
}