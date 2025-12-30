import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-clearing-handoff-inquiry',
  imports: [ReactiveFormsModule],
  templateUrl: './clearing-handoff-inquiry.html',
  styleUrl: './clearing-handoff-inquiry.css',
})
export class ClearingHandoffInquiry {

  ClearingHandoffInquiryForm:FormGroup;

  constructor(private fb:FormBuilder){

    this.ClearingHandoffInquiryForm=this.fb.group({

      Payment_Product:['',Validators.required],
      Date:[new Date(),Validators.required],

      Customer_ID:['',Validators.required],

      Customer_Nmae:['',Validators.required]
    })
  }



}
