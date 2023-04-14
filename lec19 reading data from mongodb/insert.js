const dbConnection = require('./mongodb');

const insert = async () => {
    // console.log("insert function");
    const db = await dbConnection();
    // console.log(db)
    const result = await db.insertOne(
        { name: "note5 5", brand: "vivo", price: "3500", cetrgory: "mobile" }
    )
    // console.log(result);

    if(result.acknowledged)
    {
        console.log("data inserted");
    }
}
insert();