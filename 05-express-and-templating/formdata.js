var express=require('express');
var bodyParser=require('body-parser');
var app=express();

app.get('/',function(req,res){
	res.render('form');
});

app.set('view engine','pug');
app.set('views','./');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/',function(req,res){
	console.log(req.body)
	res.send("recieved your request");
});
app.listen(3000,()=>console.log('Server running on port 3000, http://localhost:3000'));

