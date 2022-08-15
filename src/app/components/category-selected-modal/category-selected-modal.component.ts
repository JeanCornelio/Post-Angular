import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { elementAt } from 'rxjs';
import { Category } from 'src/app/models/category-model';
import { CategoryService } from 'src/app/service/category.service';

@Component({
  selector: 'app-category-selected-modal',
  templateUrl: './category-selected-modal.component.html',
  styleUrls: ['./category-selected-modal.component.css']
})
export class CategorySelectedModalComponent implements OnInit {
  categories:Category[]=[]
  categorySelected:any[]=[];
  disabled= true;
  
  constructor( public dialogRef: MatDialogRef<CategorySelectedModalComponent>,
               private categoryService: CategoryService,
               @Inject(MAT_DIALOG_DATA) public data:any ) { }

  ngOnInit(): void {
    this.getCategories();
   

  }

  getCategories(){
    this.categoryService.getCategories().subscribe({
      next:(res)=>{
        this.categories = res;
        if(this.data !==undefined){
          this.data.forEach((element:any)=>{
              this.categorySelected.push(element)
          })
          this.categories.forEach((el:any)=>{
            this.categorySelected.forEach((element:any)=>{
              if(el._id === element._id){
                el.checked = true;
              }
            })
          })
        }
     
      },

      error:(err)=>{

        console.log("Error");

      }
      
    })
  
  }

  setSelectedCategory(cate:Category){

    let searchCategory = this.categorySelected.find((el:any) => el._id === cate._id)
   
    if(searchCategory !== undefined){
    
      let indexOf = this.categorySelected.indexOf(searchCategory)
      
      this.categorySelected.splice(indexOf,1);

    }else{

      this.categorySelected.push(cate);

    }
    
    if(this.categorySelected.length !== 0 ){
      this.disabled = false;
    }else if (this.data != undefined){
      this.disabled = false;
    }else{
      this.disabled = true;
    }
  }


  save(){
    this.dialogRef.close({
      category: this.categorySelected
    });
  }

  close(){
    this.dialogRef.close();
  }


}
