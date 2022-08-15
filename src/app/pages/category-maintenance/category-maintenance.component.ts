import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from 'src/app/components/modal/modal.component';
import { Category, CategoryPost } from 'src/app/models/category-model';
import { CategoryService } from 'src/app/service/category.service';


@Component({
  selector: 'category-maintenance',
  templateUrl: './category-maintenance.component.html',
  styleUrls: ['./category-maintenance.component.css']
})
export class CategoryMaintenanceComponent implements OnInit {
  categories:Category[]=[];
  constructor(private srvCategory : CategoryService,
              public dialog: MatDialog, ) { }

  ngOnInit(): void {
    this.getCategories();
  }

  openModal(category:any = null){
   this.dialog.open(ModalComponent,{
    width:"400px",
    data: {
      category
    }
    }).afterClosed().subscribe((result)=>{
      if(!result) return
      let category = result.data.category
      let id = result.data.id
        if(result.data.edit === false){
          this.postCategory(category);
        }else{
          this.editCategory(id, category);
        }
    })
  }

  getCategories(){
    this.srvCategory.getCategories().subscribe({
      next:(res)=>{
        this.categories = res
      },
      error:(err)=>{
        console.log("error del Servidor");
      }
    })
  }

  postCategory(category:CategoryPost){
    this.srvCategory.postCategory(category).subscribe({
      next:(res)=>{
        this.getCategories();
      },
      error:(err)=>{
        console.log("error del Servidor");
      }
    });
  }

  deleteCategory(id:string){
    this.srvCategory.deleteCategory(id).subscribe({
      next:(res)=>{
        this.getCategories();
      },
      error:(err)=>{
        console.log("error del Servidor");
      }
    })
  }

  editCategory(id: string, category:Category){
      this.srvCategory.updateCategory(id, category).subscribe({
        next:(res)=>{
          this.getCategories();
        },
        error:(err)=>{
          console.log("error del Servidor");
        }
      })

  } 

}
