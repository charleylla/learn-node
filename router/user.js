// 引入 express
const express = require("express")
// 创建一个 router 实例，所有的请求都挂载到这个实例上
const router = express.Router();
let charley = {name:"charley",age:23};

router.get("/",mid1,mid2);
// 这里定义了两个中间件，它们之间使用 next 跳转
function mid1(req,res,next){
    console.log("user.mid1")
    // next()
    /**
     * 这里给 next 传入了 "router" 参数，将会直接跳过当前路由配置，进入到下一个路由配置中（user2）
     * 同时，控制台中的输出应该为：user.mid1 user2.mid1 user2.mid2
     * 这种方案让我们可以直接跳过一整块路由配置，而不需要在每个中间件中都调用 next
     * "router" 的含义或许就是如此：跳转到下一个路由配置中
     */
    next("router")
}

function mid2(req,res,next){
    console.log("user.mid2")
    // 在对本路由配置的最后一个中间件使用 next 跳转时，将会跳转到下一个路由配置（user2）的第一个中间件中
    next();
}

module.exports = router;