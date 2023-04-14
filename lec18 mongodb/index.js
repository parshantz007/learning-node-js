const {MongoClient}=require('mongodb');
// const url='mongodb://localhost:27017';  /////////this didnt work dunno why, not found answer on google as well
const url='mongodb://0.0.0.0:27017';
const database='e-comm';    
const client=new MongoClient(url);

async function getData()
{
    let result=await client.connect();
    let db=result.db(database);    
    let collection=db.collection('products');
    let response=await collection.find({}).toArray();
    console.log(response);
}

getData();