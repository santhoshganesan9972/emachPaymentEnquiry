import { Routes } from '@angular/router';
import { Inquiries } from './inquiries/inquiries';
import { FileEnquiry } from './inquiries/file-enquiry/file-enquiry';
import { TransactionEnquiry } from './inquiries/transaction-enquiry/transaction-enquiry';
import { AccountingEntriesInquiry } from './inquiries/accounting-entries-inquiry/accounting-entries-inquiry';
import { ClearingHandoffInquiry } from './inquiries/clearing-handoff-inquiry/clearing-handoff-inquiry';
import { ClearingResponseInquiry } from './inquiries/clearing-response-inquiry/clearing-response-inquiry';
import { CustomerResponseInquiry } from './inquiries/customer-response-inquiry/customer-response-inquiry';
import { SwiftGPI } from './inquiries/swift-gpi/swift-gpi';
import { Notfounterrorpage } from './inquiries/notfounterrorpage/notfounterrorpage';

export const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'Inquires' },
    {
        path: 'Inquires', component: Inquiries,
        children: [
            { path: 'fileEnquiry', component: FileEnquiry },
            { path: 'transactionEnquiry', component: TransactionEnquiry },
            { path: 'accountingEntriesEnquiry', component: AccountingEntriesInquiry },
            { path: 'clearingHandoffInquiry', component: ClearingHandoffInquiry },
            { path: 'clearingResponseInquiry', component: ClearingResponseInquiry },
            { path: 'customerResponseInquiry', component: CustomerResponseInquiry },
            { path: 'swiftGPI', component: SwiftGPI }
        ]
    },
    { path: '**', component: Notfounterrorpage }

];
