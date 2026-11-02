const { MongoClient}=require('mongodb');
const url="mongodb://127.0.0.1:27017";
const dbName="Web_Tech";

MongoClient.connect(url)
	.then((client)=>{
		const db=client.db(dbName);
		console.log(`Database "${dbName}" is created`);
		client.close();
	})
	.catch((err)=>{
		console.error("An error occured:",err);
	});