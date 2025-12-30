import { Component } from '@angular/core';
import { RouterOutlet, RouterLinkWithHref } from '@angular/router';
import {MatSelectModule} from '@angular/material/select';
import { MatSlideToggle } from '@angular/material/slide-toggle';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-inquiries',
  imports: [RouterOutlet, MatSelectModule, RouterLinkWithHref, MatSlideToggle, FormsModule,CommonModule],
  templateUrl: './inquiries.html',
  styleUrl: './inquiries.css',
})
export class Inquiries {

  showSearchParameters!:boolean;

}
