const { MongoClient}=require('mongodb');
const url="mongodb://127.0.0.1:27017";
const dbName="Web_Tech";

MongoClient.connect(url)
	.then((client)=>{
		const db=client.db(dbName);
		const collection = db.collection("student")
		return collection.find().toArray()
			.then(docs=>{
				console.log(docs);
				client.close();
			});
	})
	.catch((err)=>{
		console.error("An error occured:",err);
	});