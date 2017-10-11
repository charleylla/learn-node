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

// 引入路由文件
const user = require("./router/user")
const user2 = require("./router/user2")
/**
 * 我们也可以为一个路由路径指定多个路由的配置，就像使用中间件一样
 * 在这些路由配置之间，同样可以写一些中间件，这些中间件之间使用 next 进行跳转
 */
app.use("/user",user,user2);

app.use((err,req,res,next) =>{
    console.log(err)
    res.json({
        code:-1,
        message:err.msg,
    })
})

app.listen(8080,()=>{
    console.log(`server listening at port 8080`)
});