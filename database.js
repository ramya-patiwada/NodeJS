const {MongoClient}=require("mongodb");


const url="mongodb+srv://Namasthe_Node:ij4N67Q25sW1XIyl@nodeproject.uhg1akn.mongodb.net/";

const client=new MongoClient(url);

const dbname="NodeDB";

async function main(){

    await client.connect();
    console.log("connected succsessfully to server");
    const db=client.db(dbname);
    const collection=db.collection("User");


    const data={
        firstname:"dinu",
        lastname:"patiwada",
        city:"andhra pradesh"
    }

    // const insertresult=await collection.insertMany([data]);
    // console.log("inserted documents->",insertresult);

    // const findresult=await collection.find({}).toArray();
    // console.log("found documents",findresult);


    // // const updateResult = await collection.updateOne({data}, { $set: { city: "ongole" } });
    // // console.log('Updated documents =>', updateResult);

    // const countres= await collection.countDocuments({});
    // console.log("count of documents:",countres);

    //find all the documrnts with firstname as dinu
    const res=await collection.find({firstname:"ramya"}).toArray();
    console.log(res);

    const updateResult = await collection.updateOne(
    { firstname: "ramya" },     // filter
    { $set: { city: "hyderabad" } }   // update
);

console.log("Updated document =>", updateResult);


const deleteResult = await collection.deleteMany(
    { firstname: "dinu" }
);

console.log("Deleted document =>", deleteResult);


    return "done";
}


main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());