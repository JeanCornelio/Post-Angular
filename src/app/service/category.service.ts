import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Category, CategoryPost } from '../models/category-model';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  url = environment.url_api;
  constructor( private readonly http: HttpClient) { }

  getCategories(): Observable<Category[]>{
    return this.http.get<Category[]>(`${this.url}/category`)
  }

  postCategory(category: CategoryPost): Observable<CategoryPost>{
    return  this.http.post<CategoryPost>(`${this.url}/category`, category);
  }

  deleteCategory(id:string){
    return this.http.delete(`${this.url}/category/${id}`);
  }

  updateCategory(id:string, model: Category){
    return this.http.put(`${this.url}/category/${id}`,model);
  }

/*
  updateUser(user:user){}
 
   
*/
}
