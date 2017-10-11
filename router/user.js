// 引入 express
const express = require("express")
// 创建一个 router 实例，所有的请求都挂载到这个实例上
const router = express.Router();
let charley = {name:"charley",age:23};

router.get("/",mid1,mid2);
// 这里定义了两个中间件，它们之间使用 next 跳转
function mid1(req,res,next){
    console.log("user.mid1")
    /**
     * 当我们在路由配置的某个中间件中调用 next 方法，传入非空或者非 "router" 参数后，将会直接跳转到错误处理中间件中。
     * 这里就跳转到了 app.js 中的错误处理中间件
     * 
     * 可见，express 的中间件系统是非常强大的，可以用来构建大型应用。
     */
    next({
        msg:"发生了一点儿错误~"
    })
}

function mid2(req,res,next){
    console.log("user.mid2")
    // 在对本路由配置的最后一个中间件使用 next 跳转时，将会跳转到下一个路由配置（user2）的第一个中间件中
    next();
}

/**
 * 除了跳转到全局错误处理中间件，还可以在路由配置中任意声明中间件
 * 也可以在 user2 中进行声明
 * 错误中间件的跳转顺序为：当前路由配置的错误处理中间件 -> 下一个路由配置的错误处理中间件 -> 全局的错误处理配置中间件
 * 要从一个错误处理中间件跳转到另一个错误处理中间件，调用 next 方法，传入非空或者非 "router" 参数即可。
 */
router.use((err,req,res,next) =>{
    console.log("xxxx")
    next(err)
})

module.exports = router;