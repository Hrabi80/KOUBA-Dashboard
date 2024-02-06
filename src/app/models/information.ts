export interface informationToAdd{
    textInFrensh:string;
    textInArabic:string;
    startDate:Date | string;
    endDate:Date | string;
}

export interface information extends informationToAdd{
    status:boolean | string;
    user:string;
}