import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-swift-gpi',
  imports: [ReactiveFormsModule],
  templateUrl: './swift-gpi.html',
  styleUrl: './swift-gpi.css',
})
export class SwiftGPI {

  SwiftGPIForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.SwiftGPIForm = this.fb.group({
      UETR: ['', Validators.required]
    })
  }

}
