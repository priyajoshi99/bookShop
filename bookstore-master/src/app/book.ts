import { reviewstr } from "./reviewstructure";

export interface books{
    _id:string,
    title:string,
    isbn:string,
    pageCount:number,
    publishedDate:string,
    thumbnailUrl:string,
    shortDescription:string,
    longDescription:string,
    status:string,
    authors:string [],
    categories:string [],
    price:number,
    currency:string,
    discount:number,
    discountUnits:string,
    reviews:reviewstr[]
}