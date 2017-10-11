// 引入 express
const express = require("express")
// 创建一个 router 实例，所有的请求都挂载到这个实例上
const router = express.Router();
let charley = {name:"charley",age:23};

router.get("/",mid1,mid2);
// 这里定义了两个中间件，它们之间使用 next 跳转
function mid1(req,res,next){
    console.log("user.mid1")
    next()
}

function mid2(req,res,next){
    console.log("user.mid2")
    // 在对本路由配置的最后一个中间件使用 next 跳转时，将会跳转到下一个路由配置（user2）的第一个中间件中
    next();
}

module.exports = router;