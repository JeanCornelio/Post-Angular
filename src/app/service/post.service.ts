import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Posts, PostsPost } from '../models/category-model';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  url = environment.url_api;
  constructor(public http : HttpClient) { }

  getPostCategoryList(): Observable<Posts[]>{
    return this.http.get<Posts[]>(`${this.url}/post`);
  }

  postPostCategoryList(post: PostsPost): Observable<PostsPost>{
    return this.http.post<PostsPost>(`${this.url}/post`,post);
  }

  deletePostCategoryList(id: string){
    return this.http.delete(`${this.url}/post/${id}`);
  }

  updatePostCategoryList(id:string,model:any){
    return this.http.put(`${this.url}/post/${id}`,model);
  }
}
