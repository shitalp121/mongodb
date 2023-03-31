//connect mongoDb with JS

// const {MongoClient} = require('mongodb');
// const url = "mongodb://localhost:27017";
// const dataBaseName = "test";
// const conn = new MongoClient(url);

// async function getData(){
//   let info = await conn.connect();
//   var db = info.db(dataBaseName);
//   var collection = await db.collection("emp");
//   console.log(collection)
//   var data = await collection.insertOne({empName:"bbb", empNo:102, sal:23000})
//   console.log(data)
// }

const dbDatabase = require("./mongodb");

const getData = async() => {
    let data = await dbDatabase();
    data = await data.find({}).toArray();
    console.log(data);
};

const insertData = async() => {
    let data = await dbDatabase();
    data = await data.insertMany([{
            empName: "bbb",
            empNo: 102,
            sal: 23000,
            age: 20,
        },
        {

            empName: "ccc",
            empNo: 103,
            sal: 24000,
            age: 22,
        },
        {
            empName: "ddd",
            empNo: 104,
            sal: 25000,
            age: 24,
        },
        {
            empName: "eee",
            empNo: 105,
            sal: 26000,
            age: 25,
        },
    ]);
    console.log("data inserted")
};






// insertData();
getData();