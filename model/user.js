let INIT_USER_ID = 10000;
let USERS = [];
// 模型类，专门用来操作 user
class User{
    // 新增 user
    createNewUser({ username,password } = {}){
        let newuser = {
            username,
            password,
            _id:INIT_USER_ID ++,
        }
        USERS.push(newuser)
    }
    // 获取用户列表
    getUsersList(){
        return USERS;
    }
    // 获取单个用户信息
    getUserInfo(userid){
        return USERS.find(v => v._id == userid)
    }
    // 修改用户信息
    modifyUserInfo(userid,newInfo){
        let user = this.getUserInfo(userid);
        Object.assign(user,newInfo)
    }
    // 向 USER 中保存用户信息
    saveUser(userInfo){
        USERS.push(userInfo)
    }
}

module.exports = User;