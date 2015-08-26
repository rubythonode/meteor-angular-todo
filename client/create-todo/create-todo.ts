import {Component, View} from 'angular2/angular2';
import {formDirectives, Control, ControlGroup, Validators} from 'angular2/angular2';

@Component({
  selector: 'create-todo'
})
@View({
  templateUrl: "client/create-todo/create-todo.ng.html",
  directives: [formDirectives]
})
export class CreateTodo {
  constructor() {
    this.createTodoForm = new ControlGroup({
      title: new Control('', Validators.required),
      responsible: new Control('', Validators.required)
    });
  }
  
  add(event) {
    event.preventDefault();
    console.log("Innerhalb add(todo)");
    if (this.createTodoForm.valid) {
      console.log("this.createTodoForm.valid");
      var todo = this.createTodoForm.value;
      Todos.insert({
        title: todo.title,
        responsible: todo.responsible,
        completed: false
      });
      this.createTodoForm.controls.title.updateValue('');
      this.createTodoForm.controls.responsible.updateValue('');
    }
  }
}