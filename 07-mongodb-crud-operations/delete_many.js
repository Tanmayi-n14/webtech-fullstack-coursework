const { MongoClient}=require('mongodb');
const url="mongodb://127.0.0.1:27017";
const dbName="Web_Tech";

MongoClient.connect(url)
	.then((client)=>{
		const db=client.db(dbName);
		const collection=db.collection("student");
		const query={name:"ABC"};
		return collection.deleteMany(query)
			.then(()=>{
				console.log("documents with name ABC deleted");
				return client.close();
			});
	})
	.catch((err)=>{
		console.error("An error occured:",err);
	});