// const { MongoClient } = require("mongodb");
// const url = "mongodb://127.0.0.1:27017/"
// const client = new MongoClient(url);

// console.log("client created ...");

// async function main() {
//     await client.connect();
//     console.log("client connected.....");

//     const database = client.db("data");
//     const collection = database.collection("customer");

//     // data display with _id
//     const allDataArray = await collection.find({}).toArray();
//     console.log(allDataArray);

//     //   _id: new ObjectId("57d28452ed5d4d54e8686ff2"),generated
//     const cursor = await collection.find();

//     while (await cursor.hasNext()) {
//         const data = await cursor.next();
//         console.log("data..", data);
//     }


// }

// main();