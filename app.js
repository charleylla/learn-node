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
 * to handle http request,you can also use app.use method
 * this method can receive all kinds of requests,such as GET/POST/PUT/PATCH...
 * for example.if you open a get request,the following code will return {code:1,requestMethod:"GET"}
 * if you open a patch request,the following code will return {code:1,requestMethod:"PATCH"}
 * if you want to handle a post request,you can also use req.body to get post data
 */
app.use("/",(req,res) =>{
    const requestMethod = req.method;
    if(Object.is(requestMethod,"POST")){
        console.log(req.body)
    }
    res.json({
        code:1,
        requestMethod
    })
})

app.listen(8080,()=>{
    console.log(`server listening at port 8080`)
});