//url binding
//<br> for next line
//if u change url that gets printed

const express=require('express');
const app=express();

app.get('/',(req,res)=>{
	res.send('Welcome to Express Routing!<br>This is the HOME page');
});

app.get('/about',(req,res)=>{
	res.send('This is the ABOUT page');
});

app.get('/about/:aid',(req,res)=>{
	res.send(`This is the ABOUT page with about page id = ${req.params.aid}`);
});

app.get('/about/:aid/books/:bid',(req,res)=>{
	res.send(`This is the ABOUT page with about page id = ${req.params.aid} and books id = ${req.params.bid}`);
});

app.listen(3000,()=>console.log('Server running on port 3000, http://localhost:3000'));
