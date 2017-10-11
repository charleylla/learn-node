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
/**
 * 
 * 我们可以使用 router 对象，来定义某部分的路由，可以让我们的程序更加模块化
 * 我们可以指定，对某个路径下的路由，采用什么样的路由配置进行处理
 * 这里我们指定了 router 文件夹下的 user 模块，该模块专门用来对 user 相关的操作进行处理
 * 注意，在 user 模块中，/ 代表的不再是站点的根目录，而是 /user 
 */
app.use("/user",user);


app.listen(8080,()=>{
    console.log(`server listening at port 8080`)
});