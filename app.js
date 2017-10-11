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

app.get("/",(req,res,next) =>{
    next({
        msg:"发生错误了"
    })
})

/**
 * 对于错误处理中间件，不止可以定义一个，可以定义多个错误处理中间件
 * 在错误处理中间件中进行控制权转移时，同样需要在 next 函数中传入非空和非 "route" 的参数
 * 总之，要想控制权流入到（下一个）错误处理中间件中，就必须在 next 函数中传入非空和非 "route" 的参数。
 */
app.use((err,req,res,next) =>{
    res.json({
        code:-1,
        message:err.msg
    })
    next(err)
    // next()
    // next("route")
})

app.use((err,req,res,next) =>{
    console.log(err)
    console.log("这里可以做其他的事情~")
})    

app.listen(8080,()=>{
    console.log(`server listening at port 8080`)
});