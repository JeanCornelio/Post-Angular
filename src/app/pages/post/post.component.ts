import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CategorySelectedModalComponent } from 'src/app/components/category-selected-modal/category-selected-modal.component';
import { Posts, PostsPost } from 'src/app/models/category-model';
import { PostService } from 'src/app/service/post.service';

import { PostModalComponent } from './post-modal/post-modal.component';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  constructor(private categoryListPost: PostService,
              private dialog: MatDialog) { }
  postCategoryLis: any=[];
  ngOnInit(): void {
    this.getPostCategoryList();
  }

  getPostCategoryList(){
    this.categoryListPost.getPostCategoryList().subscribe({
      next:(res)=>{
        this.postCategoryLis = res;
        console.log("lol")
      },
      error:(err)=>{

      }
    })
 
  }

  addPostOpenModal(){
    this.dialog.open(PostModalComponent,{
      width:"23%",
      data:{
        title:0
      }
    }).afterClosed().subscribe(()=>{
      this.getPostCategoryList();
     
    })
  }

  deletePost(id:string){
    this.categoryListPost.deletePostCategoryList(id).subscribe({
      next:(res)=>{
        this.getPostCategoryList();
      },
      error:(err)=>{

      }
    })
  }

  updatePost(post: Posts){
    this.dialog.open(PostModalComponent,{
      data:{
        post,
        title:1
      }
    }).afterClosed().subscribe(()=>{
    this.getPostCategoryList();
    })
  }

}
