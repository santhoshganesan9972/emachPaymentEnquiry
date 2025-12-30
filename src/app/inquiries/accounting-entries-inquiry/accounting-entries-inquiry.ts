import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-accounting-entries-inquiry',
  imports: [ReactiveFormsModule],
  templateUrl: './accounting-entries-inquiry.html',
  styleUrl: './accounting-entries-inquiry.css',
})
export class AccountingEntriesInquiry {

  AccountingEntriesInquiryForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.AccountingEntriesInquiryForm = this.fb.group({
      
      PSH_Payment_ID: ['', Validators.required],
      Value_Date_Range: [new Date(), Validators.required],
      Account_Number: [0, Validators.required],
      Accounting_Batch_ID: [0, Validators.required],

      Debtor_Account_Currency: ['', Validators.required],
      Amount_From: ['', Validators.required],
      Payment_Product: ['', Validators.required],
      Transaction_Date_Range: [new Date(), Validators.required],
      Amount_To: ['', Validators.required],
      Debit_or_Credit: ['', Validators.required]

    })
  }


}
