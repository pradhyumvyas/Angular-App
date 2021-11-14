import {
  Component,
  OnInit
} from '@angular/core';
import {
  Todo
} from '../../Todo';
@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos: Todo[];
  constructor() {
    this.todos = [{
        sno: 1,
        title: 'Learn Angular',
        description: 'Learn Angular',
        status: true
      },
      {
        sno: 2,
        title: 'Learn Spring',
        description: 'Learn Spring',
        status: true
      },
      
      {
        sno: 3,
        title: 'Learn Spring Boot',
        description: 'Learn Spring Boot',
        status: true
      }
    ];
  }
  ngOnInit(): void {}

}
