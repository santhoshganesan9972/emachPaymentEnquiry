import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-transaction-enquiry',
  imports: [ReactiveFormsModule],
  templateUrl: './transaction-enquiry.html',
  styleUrl: './transaction-enquiry.css',
})
export class TransactionEnquiry {

  transactionEnquiryForm: FormGroup;

  constructor(private fb: FormBuilder) {

    this.transactionEnquiryForm = this.fb.group({

      Customer_File_ID: [0, Validators.required],
      Customer_Name: ['', Validators.required],
      Debtor_Account_Number: [0, Validators.required],
      Payment_Status: ['', Validators.required],
      PSH_Payment_ID: ['', Validators.required],
      Creditor_Account_Number: [0, Validators.required],
      Cheque_Number_from: [0, Validators.required],
      Payment_Amount_From: [0, Validators.required],
      Clearing_system_ID: ['', Validators.required],

      Customer_Payment_ID: ['', Validators.required],
      Creditor_Name: ['', Validators.required],
      Transfer_Currency: ['', Validators.required],
      Transaction_Direction: ['', Validators.required],
      Debit_Bank_Routing_Number: ['', Validators.required],
      Creditor_Bank: ['', Validators.required],
      Cheque_Number_to: [0, Validators.required],
      Payment_Amount_to: [0, Validators.required],

      Debtor_Name: ['', Validators.required],
      Payment_Product: ['', Validators.required],
      Value_Data: [new Date(), Validators.required],
      Debtor_Bank: ['', Validators.required],
      Settlement_Method: ['', Validators.required],
      Originator_Id: ['', Validators.required],
      Channel_Name: ['', Validators.required]


    })
  }

}
