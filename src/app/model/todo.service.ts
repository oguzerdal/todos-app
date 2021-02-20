import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from './todo.model';


@Injectable()
export class TodoService {
  
  
  baseUrl:string="https://jsonplaceholder.typicode.com/";
  constructor(private http: HttpClient) { }


  getTodos(): Observable<Todo[]>{
    return this.http.get<Todo[]>(this.baseUrl + 'todos')
}
  updateTodo(todo: Todo): Observable<any>{
    return this.http.put<Todo[]>(this.baseUrl + 'todos/'+ todo.id, todo)
  }

  deleteTodo(todo:Todo): Observable<any>{
    return this.http.delete<Todo>(this.baseUrl + 'todos/' + todo.id )
  }
}
