import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-clearing-response-inquiry',
  imports: [ReactiveFormsModule],
  templateUrl: './clearing-response-inquiry.html',
  styleUrl: './clearing-response-inquiry.css',
})
export class ClearingResponseInquiry {

  ClearingResponseInquiryForm: FormGroup;

  constructor(private fb: FormBuilder) {

    this.ClearingResponseInquiryForm = this.fb.group({

      File_Name: ['', Validators.required],
      Clearing_System_Reference: ['', Validators.required],

      PSH_Reference_Number: [0, Validators.required],

      Customer_Response_Date_From_and_To: [new Date(), Validators.required]

    })
  }


}
