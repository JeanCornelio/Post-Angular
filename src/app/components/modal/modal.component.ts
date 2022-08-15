
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  userForm!: FormGroup;
  id: string = '';
  constructor(
    private readonly fb: FormBuilder,
    public dialogRef: MatDialogRef <ModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any
  ) { }

  ngOnInit(): void {
    this.userForm = this.initForm();
    this.validateForm();
  }

  onSubmit(): void{
    let category = this.userForm.value;
    const id = this.id
    this.dialogRef.close({
    data: {
      category,
      id,
      edit: this.data.category != null
    }
   })
  }

  initForm(): FormGroup{
    //Declare propierties form
   return  this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]]
    })
  }


  validateForm(){
    if(this.data.category != null){
      this.id = this.data.category._id
      this.userForm.get("name")?.patchValue(this.data.category.name);
    }
  }

  close(){
    this.dialogRef.close();
  }


}
