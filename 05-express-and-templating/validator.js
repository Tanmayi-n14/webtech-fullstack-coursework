import val from "validator";

var email="tanmayi@pes.edu"
console.log(val.isEmail(email));

var email="tanmayi@.edu"
console.log(val.isEmail(email));

var name="tanmayi"
console.log(val.isLowercase(name));

var name="TANMAYI"
console.log(val.isLowercase(name));
