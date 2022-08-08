export interface DonationDownload{
    contact:number|undefined;
    city: string;
    name:string;
    expiry_date_time:string|null;
    description:string;
    made_date_time:string|null;
    user_name:string | null | undefined;
    servings:number|undefined;
    id:string
    pincode:number
    user_email:string | null | undefined
}

export interface DonationUpload{
    contact:number|undefined;
    city: string;
    name:string;
    expiry_date_time:string|null;
    description:string;
    made_date_time:string|null;
    user_name:string | null | undefined;
    servings:number|undefined;
    pincode:number|undefined
    user_email:string | null | undefined
}

export interface Receive{
    city: string
    donator_name:string | null | undefined
    receiver_name:string | null | undefined
    name:string;
    expiry_date_time:string|null;
    description:string;
    made_date_time:string|null;
    servings:number|undefined;
    pincode:number|undefined;
    receiver_email: string | null | undefined;
    donator_email:string | null | undefined;
    
}

export interface ReceiveDownload{
    city: string
    donator_name:string | null | undefined
    receiver_name:string | null | undefined
    name:string;
    expiry_date_time:string|null;
    description:string;
    made_date_time:string|null;
    servings:number|undefined;
    pincode:number|undefined;
    receiver_email: string | null | undefined;
    donator_email:string | null | undefined;
    id:string
}