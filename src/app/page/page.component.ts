import { Component } from '@angular/core';

@Component({
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent {
    title = 'todo';
    todos =   [];
  onKeydown(newTodolable){
    var newTodo = {
      lable:newTodolable,
    };
    this.todos.push(newTodo);
  
  }
  deleteTodo(Todo){
    this.todos = this.todos.filter(t =>t.lable!==Todo.lable);
  }
  
}
