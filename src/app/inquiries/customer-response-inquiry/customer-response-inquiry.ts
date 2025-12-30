import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-customer-response-inquiry',
  imports: [ReactiveFormsModule],
  templateUrl: './customer-response-inquiry.html',
  styleUrl: './customer-response-inquiry.css',
})
export class CustomerResponseInquiry {

  CustomerResponseInquiryForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.CustomerResponseInquiryForm = this.fb.group({

      Customer_Response_File_Name: ['', Validators.required],
      PSH_File_ID: ['', Validators.required],
      Channel_Name: ['', Validators.required],

      Customer_Response_Type: ['', Validators.required],
      Customer_ID: ['', Validators.required],
      Originator_ID: ['', Validators.required],

      Customer_Response_Date_Range: [new Date(), Validators.required],
      Customer_Name: ['', Validators.required],
      File_Flow: ['', Validators.required]
    })
  }

}
