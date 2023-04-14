const dbConnection = require('./mongodb');


const updateData = async () => {
    let data = await dbConnection();
    let result =await data.updateMany(      //////// it wull update multiple record but below one will update only singlge record
    // let result =await data.updateOne(
        { name: "note pro 5" }, {
        $set: { name: "iphone hai" }
    }
    )
    console.warn(result);
    // data =
}

updateData();