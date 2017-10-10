const express = require("express");
const app = express();

app.get("/",(req,res) =>{
    /**
     * Foramt a queryString from url
     * for example,to open a request such as "localhost:8080?name=charley&age=23"
     * and the value of req.query is {name:"charley",age:"23"}
     * with this property you don't need to parse the queryString from url by yourself
     * and express has done it.
     */
    console.log(req.query)
    /**
     * you can get certain query value like this
     */
    console.log(req.query.name)
    res.json({code:0,status:200})
})

app.get("/:name",(req,res) =>{
    /**
     * this property is used to format the path from url
     * for example,if you open a request "localhost:8080/charley",the path of this url is "charley"
     * and the value of req.params is {name:"charley"} 
     * similar to req.query,you don't need to parse the path from url by yourself.
     */
    console.log(req.params)
    /**
     * you can get certain path value like this.
     */
    console.log(req.params.name)
    res.json({code:0,status:200})
})

app.listen(8080,()=>{
    console.log(`server listening at port 8080`)
});