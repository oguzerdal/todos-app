import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { UserService } from './user.service';
import { TodoService } from './todo.service';
import { UserRepository } from './user.repository';
import { TodoRepository } from './todo.repository';

@NgModule(
    {
        imports:[HttpClientModule],
        providers:[UserService, TodoService, UserRepository, TodoRepository]
    }
)
export class ModelModule {}