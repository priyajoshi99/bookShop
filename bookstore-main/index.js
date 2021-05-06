const express = require('express');
const mongoose = require('mongoose');
const jwt=require('jsonwebtoken')
var mongo = require('mongodb');
var cors = require('cors')
const app = express();
const{ Profile } = require('./models');

const book=require('./models/book')
const user=require('./models/users')
// const product=require('./routes/product')

console.log("todo require",book);

mongoose.connect('mongodb://localhost:27017/bookstore', {useNewUrlParser: true},{ useFindAndModify: false })
mongoose.set('useFindAndModify', false);


// app.use('/products',product)
app.use(express.json());
app.use(express.urlencoded());
app.use(cors())


//finding all the books

app.get('/books',(req,res)=>{

    book.find({}).exec((err,books) =>{
    if (err) return handleError(err);
       res.json(books);
  })
 
})

// finding books by title

app.get('/books/:title',async (req,res)=>{

  var value=req.params.title;
   book.find({title:{$regex:value,$options:'$i'}}).exec((err,booksbytitle) =>{
    if (err) return handleError(err);
      console.log(booksbytitle)
       res.json(booksbytitle);
  })
 
})

//finding categories by name

app.get('/categories/:name', (req,res)=>{
  let r=req.params.name;
     book.find({categories:r}).exec((err,categorybooks) =>{
      if (err) return handleError(err);
         res.json(categorybooks);
    })
    
   
})

//finding newreleases based on date

app.get('/newreleases', (req,res)=>{
   book.find().sort( { publishedDate: -1 } ).limit(10).exec((err,newreleases) =>{
    if (err) return handleError(err);
       res.json(newreleases);
  })
   
  
})

//posting review into the document

app.post('/review',async (req,res)=>{
  console.log(req.body.title);
  let value=req.body.title;
  var userreview={
             name:req.body.name,
             comment:req.body.comment,
             rating:req.body.rating
         }
   await book.findOneAndUpdate(
      {title:value},
      {
          $push:{
              reviews:userreview
          }
      }
      )
  console.log("data pushed")
  res.send("data recieved");
})

//adding documents into books collection

app.post('/products/add',(req,res)=>{
  var book1=new book({

      title:req.body.title,
      isbn:req.body.isbn,
      pageCount:req.body.pageCount,
      publishedDate:req.body.publishedDate,
      thumbnailUrl:req.body.thumbnailurl,
      shortDescription:req.body.shortDescription,
      longDescription:req.body.longDescription,
      status:req.body.status,
      authors:req.body.authors,
      categories:req.body.categories,
      price:req.body.price,
      currency:req.body.currency,
      discount:req.body.discount,
      discountUnits:req.body.discountunit
  })
  book1.save(function (err, book) {
      if (err) return console.error(err);
      console.log( " saved to bookstore collection.");
    });
  res.status(200).send({"message":"data recieved"})
  
})

//updating documents in books database

app.put('/products/update',(req,res)=>{
  var id=req.body._id;
  console.log(id);
  var updates=req.body;
  console.log(req.body);
  book.findByIdAndUpdate(id,updates,(err,result)=>{
    if(err){
      res.send(err)
    }
    console.log("document was updated");
  })
})

//deleting documents from database

app.delete('/products/:id',(req,res)=>{
    var id=req.params.id;
    console.log(id);
    book.findByIdAndDelete(id,(err,result)=>{
      if(err){
        console.log(err)
      }
      console.log("document was deleted")
    })
})

app.get('/profile',(req,res) => {
    Profile.find().then((profile) =>{
        res.send(profile);
    }).catch((e)=>{
        res.send(e);
    })
})

app.post('/profile',(req,res) =>{
	
    let address = req.body.address;
    let email = req.body.email;
    let mobile = req.body.mobile;
    let newProfile = new Profile({
        address,
        email,
        mobile
    });
    newProfile.save().then((profileDoc) =>{
        res.send(profileDoc);
    }) 

});

//users

function verifytoken(req,res,next){
  if(!req.headers.authorization){
    return res.status(401).send("unauthorized access")
  }
  let token=req.headers.authorization.split('')[1]
  if(token=='null'){
    return  res.status(401).send("unauthorized access")
  }
  let payload=jwt.verify(token,'secretKey')
  if(!payload){
    return  res.status(401).send("unauthorized access")
  }
  req.userId=payload.subject
  next()
}

app.post('/user/register',(req,res)=>{
  let userinfo=req.body;
  console.log(userinfo)
  var user1=new user(userinfo)
  user1.save((err,result)=>{
      if(err){
          console.log("error")
      }
      else{
          console.log("document saved to user collection")
          let payload={subject:result._id}
          let token=jwt.sign(payload,'secretKey')
          res.status(200).send({token});
      }
  })
})

app.post('/user/login',(req,res)=>{
  let logindetails=req.body;
  console.log(logindetails)
  user.findOne({email:logindetails.email},(err,userp)=>{
    if(err){
      console.log(err)
    }else{
      if(!userp){
        res.status(401).send("invalid email")
      }else{
        console.log(userp)
        if(userp.password!=logindetails.password){
          res.status(401).send("invalid password")
        }
        else{
          let payload={subject:userp._id}
          let token=jwt.sign(payload,'secretKey')
          console.log("login was successful")
          res.status(200).send({token,userp})
        }
      }
    }
  })
})

//adding products in the user

app.post('/user/cart',async (req,res)=>{

  console.log(req.body)
  let userid=req.body.uid;
  console.log(userid)
  var cartitem={
    pid:req.body.pid,
    title:req.body.title,
    price:req.body.price,
    qty:req.body.qty,
    discount:req.body.discount
  }
 await  user.findByIdAndUpdate(
    userid,
    {
        $push:{
            cart:cartitem
        }
    }
    )
  console.log("data pushed to cart array")
  res.status(200).send("data pushed")
  
   
})

//getting user details

app.get('/user/:id',(req,res)=>{

   let userid=req.params.id;
   user.findById(userid,(err,result)=>{
     if(err){
       console.log(err)
     }else{
       console.log(result)
       res.json(result)
     }
   })
})

app.patch('/profile/:id',(req,res)=>{
    Profile.findOneAndUpdate({_id:req.params.id}, {
        $set: req.body
    }).then(() => {
        res.sendStatus(200);
    });

});



app.listen(3000, function() {
    console.log('listening on 3000')
  })
