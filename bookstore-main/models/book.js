const mongoose=require('mongoose')

const reviewschema = new mongoose.Schema({ 
    name: 'string',
    comment:'string',
    rating:'Number' 

});

const Bookschema=new mongoose.Schema({
    _id:String,
    title:String,
    isbn:String,
    pageCount:Number,
    publishedDate:Date,
    thumbnailUrl:String,
    shortDescription:String,
    longDescription:String,
    status:String,
    authors: [],
    categories: [],
    price:Number,
    currency:String,
    discount:Number,
    discountUnits:String,
    reviews:[reviewschema]
})

const model=mongoose.model('book',Bookschema);
module.exports=model;
