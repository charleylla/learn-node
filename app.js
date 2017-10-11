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
 * but the parameter response are not same. 
 */
 
app.use("/",mid1,mid2);

/** 
 * next 函数可以接受几种形式的参数：
 * 1.不传参数
 * 2.接受一个 "route" 参数
 * 3.接受其他类型的参数
 * 
 * 其中 1 和 2 都会将控制权交给下一个中间件
 * 注意，只有在接受一个 "route" 字符串的参数时才会将控制权转移到下一个中间件
 * 
 * 如果传入其他类型的参数，将会当做错误处理，传入错误处理中间件（如果有的话）
 * 错误处理中间件一般作为最后一个中间件使用
*/
function mid1(req,res,next){
    next({
        msg:"请求失败！"
    })
    // next("route")
    // next()
}

function mid2(req,res,next){
    res.json({
        code:1,
        msg:"success",
    })
}

/** 
 * 错误处理中间件用来进行错误处理，当在前面的中间件中掉用 next 函数，并传入非空或者非 "route" 参数后，请求 
 * 将会流入错误处理中间件。
 * 错误处理中间件一般作为最后一个中间件使用，其接受四个参数。
 * 一般情况下，这四个参数无法省略，否则无法向服务端返回数据。
 * 在错误处理中间件中，需要向客户端回执返回数据，否则将会造成客户端挂起。
*/

// 这个错误处理中间件中，由于参数不完整（没有传入 next 参数），导致无法向客户端回执数据
// 同时在客户端上会提示服务端 500 错误
// app.use((err,req,res) =>{
//     res.status(404);
//     res.json({
//         code:-1,
//         message:err.msg
//     })
// })

app.use((err,req,res,next) =>{
    res.status(404);
    console.log(err)
    res.json({
        code:-1,
        message:err.msg
    })
})

app.listen(8080,()=>{
    console.log(`server listening at port 8080`)
});