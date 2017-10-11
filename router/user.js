// 引入 express
const express = require("express")
// 创建一个 router 实例，所有的请求都挂载到这个实例上
const router = express.Router();
let charley = {name:"charley",age:23};

/**
 * 也可以使用 route 方法接受请求，然后根据不同的请求类型进行处理，方便做出 restful 风格的 api
 */
router.route("/charley")
    // 使用 get 请求时获取人物信息
    .get((req,res,next) =>{
        res.json({
            code:0,
            msg:"success",
            user:charley
        })
    })
    // 使用 post 请求时修改人物信息
    .post((req,res,next) =>{
        const { name,age } = req.body;
        charley.name = name;
        charley.age = age;
        res.json({
            code:0,
            msg:"success"
        })
    })

module.exports = router;