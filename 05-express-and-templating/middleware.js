const express=require('express');
const app=express();

app.use((req,res,next) => {
	console.log("Middleware 1");
	next();
});

app.get("/",(req,res,next) => {
	console.log("Middleware 2");
	next();
});

app.get("/",(req,res) => {
	console.log("Main Route Handler");
	res.send("Hello from Express Middleware!");
});

app.listen(3001,()=>console.log('Server running on port 3001, http://localhost:3001'));