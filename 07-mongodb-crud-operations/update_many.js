const { MongoClient}=require('mongodb');
const url="mongodb://127.0.0.1:27017";
const dbName="Web_Tech";

MongoClient.connect(url)
	.then((client)=>{
		const db=client.db(dbName);
		const collection=db.collection("student");
		return collection.updateMany({name:"ABC"},{$set:{sem:"8"}})
			.then(()=>{
				console.log("2 documents updated");
				return client.close();
			});
	})
	.catch((err)=>{
		console.error("An error occured:",err);
	});