const express = require('express');
const fileUpload = require('express-fileupload');
const app = express();

app.use(fileUpload());

app.get('/',(req,res) => {
	res.sendFile(__dirname+'/index.html');
});

app.post('/upload',(req,res) => {
	if (!req.files || !req.files.myFile) 
	{
		return res.send('No file uploaded'); 
	}
	let file = req.files.myFile;
	file.mv(__dirname+'/uploads/'+file.name,(err) => {	
		if (err) return res.status(500).send(err);
		res.send('File uploaded successfully');
	});
});

app.listen(5000, () => {
	console.log ('Server running at http://localhost:5000');
});	