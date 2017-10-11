// 引入 express
const express = require("express")
// 创建一个 router 实例，所有的请求都挂载到这个实例上
const router = express.Router();
// 引入 User 模型类
const UserModel = require("../model/user");
// 新建 User 模型对象，用来对数据进行增删改查的操作
const User = new UserModel();

router.route("/")
    .get((req,res) =>{
        const users = User.getUsersList();
        res.send(users)
    })
    .post((req,res) =>{
        const { username,password } = req.body;
        User.createNewUser({ username,password });
        res.send({
            code:1,
            message:"新增用户成功"
        })
    })

router.route("/:id")
    .get((req,res) =>{
        const userid = req.params.id;
        const user = User.getUserInfo(userid);
        res.send(user)
    })
    .patch((req,res) =>{
        const userid = req.params.id;
        const { username,password } = req.body;
        User.modifyUserInfo(userid,{ username,password })
        res.send({
            code:1,
            message:"修改用户成功"
        })
    })


module.exports = router;