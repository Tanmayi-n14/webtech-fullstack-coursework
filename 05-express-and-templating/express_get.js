//basic routing
//<br> for next line
//give /about to get about page

const express=require('express');
const app=express();

app.get('/',(req,res)=>{
	res.send('Welcome to Express Routing!<br>This is the HOME page');
});

app.get('/about',(req,res)=>{
	res.send('This is the ABOUT page');
});

app.listen(3000,()=>console.log('Server running on port 3000, http://localhost:3000'));

