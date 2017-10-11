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
 * 所有的请求方式都可以中间件，如 GET/POST/PATCH 等，app 上的这些方法都可以使用中间件，不只是 app.use 才可以使用中间件
 */
app.get("/",mid1,mid2);

function mid1(req,res,next){
    console.log("middleware 1")
    // next({msg:"发生错误啦~"})
    next()
}

function mid2(req,res,next){
    console.log("middleware 2")
    res.json({
        code:1,
        msg:"success",
    })
}

/**
 * 测试了一下，错误中间件好像必须使用 use 来进行定义，无法使用 GET 等进行定义
 */

app.use((err,req,res,next) =>{
    console.log(err)
    res.status(404);
    res.json({
        code:-1,
        message:err.msg
    })
})

app.listen(8080,()=>{
    console.log(`server listening at port 8080`)
});