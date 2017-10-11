const express = require("express")
const router = express.Router()

router.get("/",mid1,mid2);
// 在 user2 中定义了一些中间件，同样可以用来对请求进行处理
function mid1(req,res,next){
    console.log("user2.mid1")
    next()
}

function mid2(req,res,next){
    console.log("user2.mid2")
    // 这是本次请求流程中的最后一个中间件，请求到此就结束了
    res.json({
        code:0,
        message:"终于处理完了~"
    })
}


module.exports = router;