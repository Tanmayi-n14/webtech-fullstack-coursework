const { MongoClient}=require('mongodb');
const url="mongodb://127.0.0.1:27017";
const dbName="Web_Tech";

MongoClient.connect(url)
	.then((client)=>{
		const db=client.db(dbName);
		const collection=db.collection("student");
		const query={sem:3};
		return collection.deleteOne(query)
			.then(()=>{
				console.log("document with sem 3 deleted");
				return client.close();
			});
	})
	.catch((err)=>{
		console.error("An error occured:",err);
	});