import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Category } from 'src/app/models/category-model';
import { CategoryService } from 'src/app/service/category.service';

@Component({
  selector: 'app-category-selected-modal',
  templateUrl: './category-selected-modal.component.html',
  styleUrls: ['./category-selected-modal.component.css']
})
export class CategorySelectedModalComponent implements OnInit {
  categories:Category[]=[]
  categorySelected:Category[]=[];
  disabled= true;
  constructor( public dialogRef: MatDialogRef<CategorySelectedModalComponent>,
               private categoryService: CategoryService ) { }

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories(){
    this.categoryService.getCategories().subscribe({
      
      next:(res)=>{
        
        this.categories = res;
      
      },

      error:(err)=>{

        console.log("Error");

      }
      
    })
  
  }

  setSelectedCategory(cate:Category){
    
    let searchCategory = this.categorySelected.find(el => el === cate)

    if(searchCategory !== undefined){
    
      let indexOf = this.categorySelected.indexOf(searchCategory)
      
      this.categorySelected.splice(indexOf,1);

    }else{

      this.categorySelected.push(cate);

    }
    console.log(this.categorySelected)

    if(this.categorySelected.length !== 0 ){
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
