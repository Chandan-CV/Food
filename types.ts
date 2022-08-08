export interface DonationUpload{
    contact:number|undefined;
    city: string;
    name:string;
    expirty_date_time:string|null;
    description:string;
    made_date_time:string|null;
    user_name:string | null | undefined;
    servings:number|undefined;
}
