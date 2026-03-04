const express = require("express");
const app = express();
const PORT = 3000;

let users = [
    {id:1,name:"dok",age:25},
    {id:2,name:"top",age:24},
    {id:3,name:"suk",age:20}
];

app.get('/users',(req,res)=>{
    res.json(users);
})

app.get('/user/:id',(req,res)=>{

    const userid = parseInt(req.params.id);
    const user = users.find(u => u.id == userid);

    if(!user)
    {
        return res.status(404).json({message:"user not found"});
    }

    res.json(user);
})

app.listen(PORT,()=>{
    console.log(`server running on PORT ${PORT}`);

});