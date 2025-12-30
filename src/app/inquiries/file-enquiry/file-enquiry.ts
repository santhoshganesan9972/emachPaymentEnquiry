import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NonNullableFormBuilder,FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-file-enquiry',
  imports: [CommonModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule],
  templateUrl: './file-enquiry.html',
  styleUrl: './file-enquiry.css',
})
export class FileEnquiry {

  fileEnquiryForm!: FormGroup;
  toshowHided_SP_Container: boolean = false;

  constructor(private fb: NonNullableFormBuilder) {

    this.fileEnquiryForm = this.fb.group({

      File_Name: [''],
      Customer_File_ID: [''],
      Initiating_Party_BIC: [''],
      Channel_Name: [''],
      Transactions_Count_From: [''],
      File_Amount_To: [''],

      File_Receipt_from: [''],
      PSH_File_ID: [''],
      File_Status: [''],
      File_Flow: [''],
      Transactions_Count_To: [''],
      File_Type: [''],

      Customer_ID: [''],
      Customer_Name: [''],
      File_Format: [''],
      Request_Type: [''],
      File_Amount_From: ['']

    })
  }
  HideContainerShowerBtn() {
    this.toshowHided_SP_Container = !this.toshowHided_SP_Container;
  }

  resetBtn() {
    this.fileEnquiryForm.reset();
  }
  searchBtn() {
    console.log(this.fileEnquiryForm.value);

  }

  



}


