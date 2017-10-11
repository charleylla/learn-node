// 引入 express
const express = require("express")
// 创建一个 router 实例，所有的请求都挂载到这个实例上
const router = express.Router();

/**
 * 这里的 / 表示的不是根路径，而是相对路径
 * 代表了前面的 /user
 * 如果不定义 / 的话，是无法访问到 /user 的，之能访问到被定义的路径
 */
router.get("/",(req,res,next) =>{
    res.status(200)
    const users = [{
        name:"charley",
        age:23
    },{
        name:"lylla",
        age:23
    }]
    res.send(JSON.stringify(users))
})

router.get("/charley",(req,res,next) =>{
    res.status(200)
    res.json({
        name:"Charley",
        age:23
    })
})

module.exports = router;