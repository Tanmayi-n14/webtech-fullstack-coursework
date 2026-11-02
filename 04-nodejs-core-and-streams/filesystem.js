//run one by one

const fs = require('fs');

fs.writeFile('example.txt','Hello this is a new file', (err) => {
	if (err) throw err;
	console.log('file created successfully');
});

fs.readFile('example.txt','utf8', (err,data) => {
	if (err) throw err;
	console.log('file content:', data);
});

fs.appendFile('example.txt','Appended text!\n', (err) => {
	if (err) throw err;
	console.log('file text appended');
});

fs.rename('example.txt','example2.txt', (err) => {
	if (err) throw err;
	console.log('file renamed successfully');
});

fs.unlink('example2.txt', (err) => {
	if (err) throw err;
	console.log('file deleted successfully');
});
