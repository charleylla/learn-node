const express = require("express");
const app = express();

/**
 * import body-parser middleware
 * this middleware helps to req.body property
 * if you don't use this middleware,the value of req.body is undefined
 * this middleware helps you to handle post requests 
 */
const bodyParser = require("body-parser");
/**
 * use body-parser middleware
 * you should call app.use method
 * in this example,bodyParser.json is used to parse mutlipart/form-data
 * and bodyParser.urlencoded is used to parse application/x-www-form-urlencoded
 */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

/**
 * app.use method can also receive functions as parameter,these functions are called middleware
 * each middleware function can receive 3 parameters:parameter request,parameter response and parameter next
 * the "next" parameter is used to  switch to next middleware function,and it's a function
 * if you don't call "next" function,HTTP requests cannot be dispatched to next middleware function.
 * in each middleware function,parameter request keeps same,they are the same javascript object
 * you don't need to transfer them manually,express has done it. 
 */
 
 let tmp;

app.use("/",mid1,mid2);
function mid1(req,res,next){
    tmp = req;
    console.log("Handle request in mid1")
    next()
}

function mid2(req,res,next){
    console.log("Handle request in mid2")
    /**
     * this returns true
     * that is,in each middleware function,the parameter request is the same javascript object.
     */
    console.log(Object.is(tmp,req))
    res.json({
        code:1,
        msg:"success"
    })
}

app.listen(8080,()=>{
    console.log(`server listening at port 8080`)
});