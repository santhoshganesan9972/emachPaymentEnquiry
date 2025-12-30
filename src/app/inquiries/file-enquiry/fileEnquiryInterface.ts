
export interface FileEnquiryInterface{

    File_Name:string,
    Customer_File_ID:Number,
    Initiating_Party_BIC:string,
    Channel_Name:string,
    Transactions_Count_From:Number,
    File_Amount_To:Number,

    File_Receipt_from:Date,
    PSH_File_ID:number,
    File_Status:string,
    File_Flow:string,
    Transactions_Count_To:number,
    File_Type:string,

    Customer_ID:number,
    Customer_Name:string,
    File_Format:string,
    Request_Type:string,
    File_Amount_From:number


}