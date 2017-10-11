// 引入 express
const express = require("express")
// 创建一个 router 实例，所有的请求都挂载到这个实例上
const router = express.Router();
/**
 * 下面定义了几个用户操作的接口：
 * 1.获取用户列表
 * 2.新建用户
 * 3.获取某个用户
 * 4.修改某个用户
 * 
 * 在请求 /user 路径下的接口是，会在本路由配置中处理
 */
router.route("/")
    .get((req,res) =>{
        res.send("尝试获取用户列表")
    })
    .post((req,res) =>{
        const { username,password } = req.body;
        res.send(`尝试新建用户，用户名：${username}，用户密码：${password}`)
    })

router.route("/:id")
    .get((req,res) =>{
        const userid = req.params.id;
        res.send(`尝试获取用户：${userid}`)
    })
    .patch((req,res) =>{
        const userid = req.params.id;
        res.send(`尝试修改用户：${userid}`)
    })


module.exports = router;