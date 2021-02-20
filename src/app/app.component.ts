import { Component, OnInit } from '@angular/core';
import { ModalService } from './model/modal.service';
import { Todo } from './model/todo.model';
import { TodoRepository } from './model/todo.repository';
import { User } from './model/user.model';
import { UserRepository } from './model/user.repository';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public name: string =""
  public user?: User;
  public todosPerPage = 10;
  public selectedPage = 1;
  public selectedTodos: Todo [] = [];
  constructor(
        private todoRepository: TodoRepository,
        private userRepository: UserRepository,
        private modalService: ModalService 
        ){}
        showModal: boolean = false;
        todoTitle: string="";
        todoCompleted: boolean= true;
        todoupdated:any=null;
        updatedTodo:Todo ={id:1, userId:1,title:"",completed:true};
        todoId: number =1;
        userId: number =1;
        patch=this.todoRepository.updatedTodo;
        
        ngOnInit() {
          
      }
  get todos(): Todo[]{
    let index = (this.selectedPage - 1) * this.todosPerPage
    this.selectedTodos = this.todoRepository
        .getTodos()
        
    return this.selectedTodos
        .slice(index, index + this.todosPerPage);
  }
  get users(): User[]{
    return this.userRepository.getUsers();
  }
  get pageNumber(): number[] {
    return Array(Math.ceil(this.todoRepository
        .getTodos().length / this.todosPerPage))
        .fill(0)
        .map((x, i) => i + 1);
}
  getUserName(userId: number): string{
     this.user = this.users.find(user => user.id == userId)
     return (this.user as User).name;
  }
  removeTodoItem(todo: Todo){
    
    this.todoRepository.deleteTodo(todo)
  }
  changePage(page: number) {
    this.selectedPage = page;
}


editTodo(todo: Todo){
  this.showModal=true;

  this.todoTitle=todo.title;
  
  this.todoCompleted=todo.completed;
  this.todoId = todo.id;
  this.userId = todo.userId;


}

closeModal(){
  this.showModal=false;
}

updateTodo(){
 this.updatedTodo.id=this.todoId;
 this.updatedTodo.userId=this.userId;
 this.updatedTodo.title=this.todoTitle;
 this.updatedTodo.completed=this.todoCompleted;
 this.todoRepository.updateTodo(this.updatedTodo);
 

}


}
