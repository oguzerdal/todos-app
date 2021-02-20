import { Injectable, OnInit } from '@angular/core'
import { Observable } from 'rxjs';
import { Todo } from './todo.model'
import { TodoService } from './todo.service';

@Injectable()
export class TodoRepository implements OnInit {
    private todos: Todo[] = [];
    public updatedTodo: Todo | null = null;
    public deletedTodo: Todo | null = null;

    constructor(private todoService: TodoService) {
        todoService
            .getTodos()
            .subscribe(todos => this.todos = todos);

    }
    ngOnInit() {

    }

    getTodos(): Todo[] {
        return this.todos;
    }
    updateTodo(todo: Todo):any{
        this.todoService.updateTodo(todo)
        .subscribe( data => this.updatedTodo = data);
    }
    deleteTodo (todo:Todo):any {
        this.todoService
        .deleteTodo(todo)
        .subscribe(response => this.deletedTodo =response);
        let index = this.todos.indexOf(todo);
        this.todos.splice(index,1);
    }

}