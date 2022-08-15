import { AfterViewChecked, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Category } from 'src/app/models/category-model';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit, AfterViewChecked{
  
  @Input() data:any;
  @Output() deleteCategoryId = new EventEmitter<string>();
  @Output() editCategoryId = new EventEmitter<Category>();

  categorySelectedGroup:any =[];
  formCategory!: FormGroup;
  constructor( private dialog: MatDialog,
               private readonly fb: FormBuilder) { }

  ngOnInit(): void {
    this.formCategory = this.initForm();
  }

 ngAfterViewChecked(): void {
 this.data.forEach((el:any) => {
  el.cheked = false;
 });
 }


 initForm(): FormGroup{
  //Declare propierties form
 return  this.fb.group({
  category: []
  })
}


  deleteCategory(id: string){
    this.deleteCategoryId.emit(id);
  }
  editCategory(category: Category){
    this.editCategoryId.emit(category);
  }

  selectionCategory(category:Category){
   
   let obj = this.categorySelectedGroup.find((x:any) => x === category)

   if(obj !== undefined){
    let index = this.categorySelectedGroup.indexOf(obj)
    this.categorySelectedGroup.splice(index,1);
   }else{
    this.categorySelectedGroup.push(category)
   }

   
console.log(this.categorySelectedGroup)
  }


}
