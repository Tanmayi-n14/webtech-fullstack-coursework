/*


//creating buffers

const buffer1 = Buffer.alloc(10,"PESU");
console.log(buffer1);
console.log(buffer1.toString());

//writing to buffers

const buffer2 = Buffer.alloc(10);
buffer2.write("PESU");
console.log(buffer2);
console.log(buffer2.toString());

//reading from buffers


const buffer3 = Buffer.from("hello,NODE.JS");
console.log(buffer3);
console.log(buffer3.toString());
console.log(buffer3.toString('utf8', 7, 11));

//concatenate

const buffer4 = Buffer.from("hello,");
const buffer5 = Buffer.from("NODE.JS");
const combined = Buffer.concat([buffer4,buffer5]);
console.log(combined.toString());

//copy

const source = Buffer.from("hello,world");
const target = Buffer.alloc(20);
source.copy(target);
console.log(target.toString());


*/
//comparing

const buffer6 = Buffer.from("abc");
const buffer7 = Buffer.from("bcd");
const buffer8 = Buffer.from("abc");
console.log(Buffer.compare(buffer6,buffer7));
console.log(Buffer.compare(buffer7,buffer6));
console.log(Buffer.compare(buffer6,buffer8));
