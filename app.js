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

app.get("/",myMiddleWare({ upper:true }))

/**
 * 如果使用闭包的形式写中间件，就可以对中间件进行配置
 * 比如，可以接收一些参数，在函数中进行处理后，根据参数决定中间件的行为
 * 例如 body-parser 中间件就是采用的这种方式。
 */
function myMiddleWare(options = {}){
    // 从配置参数中解析指令
    const { upper } = options; 
    const name = "charley";
    let returnValue = {};
    // 根据指定决定相应的返回数据
    if(upper){
        returnValue = {
            name:name.toUpperCase(),
        }
    }else{
        returnValue = {
            name:name.toLowerCase(),
        }
    }
    // 返回一个闭包函数，这是真正的中间件处理函数
    return (req,res,next) =>{
        res.json(returnValue);
    }
}

app.listen(8080,()=>{
    console.log(`server listening at port 8080`)
});