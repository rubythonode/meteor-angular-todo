import {Component, View, bind, bootstrap} from 'angular2/angular2';
import {routerInjectables, routerDirectives, Router, RouteConfig} from 'angular2/router';
import {LocationStrategy, Location, HashLocationStrategy} from 'angular2/router';

import {TodosList} from 'client/todos-list/todos-list';
import {TodoDetails} from 'client/todo-details/todo-details';

@Component({
  selector: 'app'
})
@View({
  template: "<router-outlet></router-outlet>"
  directives: [routerDirectives]
})
@RouteConfig([
  {path: '/', as 'todos-list', component: TodosList},
  {path: '/todo/:todoId', as: 'todo-details', component: TodoDetails}
])
class MeteorAngular01 {
}

bootstrap(MeteorAngular01, [
  routerInjectables,
  bind(LocationStrategy).toClass(HashLocationStrategy)
]);