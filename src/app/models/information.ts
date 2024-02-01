export interface informationToAdd{
    textInFrensh:string;
    textInArabic:string;
    startDate:Date;
    endDate:Date;
}

export interface information extends informationToAdd{
    status:boolean;
    user:string;
}