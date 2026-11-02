
var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.set('view engine', 'pug');
app.set('views', './');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function(req, res) {
    res.render('employee_form');
});

app.post('/', function(req, res) {
    
    console.log("--- New Employee Details Received ---");
    console.log(req.body);

    var name = req.body.name;
    var id = req.body.emp_id;
    var dept = req.body.dept;
    var email = req.body.email;
    var salary = req.body.salary;

    var output = `
        <h2>Employee Details Submitted</h2>
        <p>Employee Name: ${name}</p>
        <p>Employee ID: ${id}</p>
        <p>Department: ${dept}</p>
        <p>Email ID: ${email}</p>
        <p>Salary: ${salary}</p>
        <br>
        <a href="/">Go Back to Form</a>
    `;
    
    res.send(output);
});

app.listen(3000, () => console.log('Server running on port 3000, http://localhost:3000'));