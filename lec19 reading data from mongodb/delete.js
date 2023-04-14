const dbConnection = require('./mongodb');

const deleteData = async () => {
    let data = await dbConnection();
    let result = await data.deleteOne(
        { name: "not5 5" }
    );
    console.warn(result);

    if(result.acknowledged)
    {
        console.log("record deleted");
    }
}

deleteData();
