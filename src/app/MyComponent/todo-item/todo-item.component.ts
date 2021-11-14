import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import {Todo} from "src/app/Todo";
// import { EventEmitter } from 'stream';
import { TodosComponent } from '../todos/todos.component';
@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  // public input : typeof Todo = Todo;
  // @Input() todo  constructor(private todosComponent:TodosComponent) { 
  //   this.todo = new Todo();

  // };
  @Input() todo: Todo;
  @Output() todoDelete:EventEmitter<Todo> = new EventEmitter();
  constructor() { 
    // @Input() todo;
    // this.todo=Todo;
  }

  ngOnInit(): void {
  }
  onClick(todo:Todo){
    this.todoDelete.emit(todo);
    console.log("clicked");
  }
}
