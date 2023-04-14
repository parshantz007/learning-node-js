//////////////we made a sepaerate file for databse connection



module.exports =dbConnection;

const {MongoClient}=require('mongodb');
const url="mongodb://0.0.0.0:27017";
const databaseName ="e-comm";
const client = new MongoClient(url);

async function dbConnection()
{
    let result =await client.connect();
    db=result.db(databaseName);
    return db.collection("products");
    // let data = await collection.find({}).toArray();
    // console.log(data);

}


// dbConnection().then((res)=>{

//     res.find({name:"iphone"}).toArray().then((data)=>{
//         console.log(data);
//     })

// })


// getData();





// main();