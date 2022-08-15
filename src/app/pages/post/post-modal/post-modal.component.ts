import { DialogRef } from '@angular/cdk/dialog';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CategorySelectedModalComponent } from 'src/app/components/category-selected-modal/category-selected-modal.component';
import { Category } from 'src/app/models/category-model';
import { PostService } from 'src/app/service/post.service';

@Component({
  selector: 'app-post-modal',
  templateUrl: './post-modal.component.html',
  styleUrls: ['./post-modal.component.css']
})
export class PostModalComponent implements OnInit {
  postForm!: FormGroup;
  categorySelected:Category[]=[]
  id:string= "";

  constructor( public dialogRef: DialogRef<PostModalComponent>,
              private fb:FormBuilder,
              private dialog: MatDialog,
              private postService :PostService,
              @Inject(MAT_DIALOG_DATA) public data: any) { }


  ngOnInit(): void {

    this.postForm = this.initForm();
    this.validateForm();
  }




  initForm(): FormGroup{
    return this.fb.group({
      title:['',[Validators.required, Validators.minLength(3)]] 
    })
  }

  
  serchCategories(){
    this.dialog.open(CategorySelectedModalComponent,{
      width:"25%",
      data:this.categorySelected
    }).afterClosed().subscribe((result)=>{
      if(!result) return
      this.categorySelected = result.category;
    })
  }


  
  save(){
    let categories = this.categorySelected;
    let title = this.postForm.value?.title;
    
    let post ={
      title,
      categories
    }
 
    if(this.data.post !==undefined){
     this.postService.updatePostCategoryList( this.data.post._id, post).subscribe(()=>{
      this.dialogRef.close();
      }) 
    
    }else{
      this.postService.postPostCategoryList(post).subscribe(()=>{
        this.dialogRef.close();
      })
    }
    
  


   



  
  }

  validateForm(){
    if(this.data.title === 1){
      this.id = this.data.post._id;
      this.categorySelected = this.data.post.categories;
      this.postForm.get("title")?.patchValue(this.data.post.title);
    }
  }


  close(){
    this.dialogRef.close();
  }

}
