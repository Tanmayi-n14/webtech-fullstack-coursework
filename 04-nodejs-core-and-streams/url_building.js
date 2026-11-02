//url building
//http://localhost:3000/users/101 use this url only then it works

const express=require('express');
const app=express();

const userId=101;
const userURL=`/users/${userId}`;

console.log('URL :',userURL)

app.get(userURL,(req,res)=>{
	res.send(`This is the user profile ${userId}`);
});

app.listen(3000,()=>console.log('Server running on port 3000, http://localhost:3000'));
