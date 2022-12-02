const { MongoClient } = require("mongodb");
const url = "mongodb://127.0.0.1:27017/"
const client = new MongoClient(url);

console.log("client created... ");

async function main() {

    await client.connect();
    console.log("client connected...");

    const database = client.db("Human_Resourse");
    const collection = database.collection("employee");

    const first = await collection.find().toArray();
    console.log(first);

    const second = await collection.find(
        {
            "salary": { $gt: "30000" }
        }).toArray()

    console.log(second);

    [
        {
            _id: ObjectId("63809e1e91000833b58238e3"),
            firstName: 'Rohan',
            lastName: 'Jame',
            salary: '52000',
            department: 'Technical',
            lastCompany: 'Y',
            lastSalary: '15000',
            overallExp: '1',
            contactInfo: '1234567860',
            yearGrad: '2015',
            gradStream: 'CSE'
        },
        {
            _id: ObjectId("63809e1e91000833b58238e4"),
            firstName: 'Jame',
            lastName: 'Doe',
            salary: '37000',
            department: 'Accounts',
            lastCompany: 'Z',
            lastSalary: '20000',
            overallExp: '1',
            contactInfo: '123567890',
            yearGrad: '2019',
            gradStream: 'ECE'
        },
        {
            _id: ObjectId("63809e1e91000833b58238e6"),
            firstName: 'Jame',
            lastName: 'roh',
            salary: '43000',
            department: 'Accounts',
            lastCompany: 'Z',
            lastSalary: '15000',
            overallExp: '2',
            contactInfo: '123567890',
            yearGrad: '2019',
            gradStream: 'EEE'
        },
        {
            _id: ObjectId("63809e1e91000833b58238e7"),
            firstName: 'Rohan',
            lastName: 'Jame',
            salary: '65000',
            department: 'Technical',
            lastCompany: 'Y',
            lastSalary: '15000',
            overallExp: '1',
            contactInfo: '1234567860',
            yearGrad: '2015',
            gradStream: 'CSE'
        },
        {
            _id: ObjectId("63809e1e91000833b58238e8"),
            firstName: 'Jame',
            lastName: 'Doe',
            salary: '42000',
            department: 'Accounts',
            lastCompany: 'Z',
            lastSalary: '20000',
            overallExp: '1',
            contactInfo: '123567890',
            yearGrad: '2019',
            gradStream: 'ECE'
        },
        {
            _id: ObjectId("63809e1e91000833b58238e9"),
            firstName: 'Sao',
            lastName: 'Avika',
            salary: '40000',
            department: 'Sales',
            lastCompany: 'Y',
            lastSalary: '15000',
            overallExp: '2',
            contactInfo: '1234567860',
            yearGrad: '2015',
            gradStream: 'CSE'
        },
        {
            _id: ObjectId("63809e1e91000833b58238ea"),
            firstName: 'Jame',
            lastName: 'Doe',
            salary: '39000',
            department: 'Accounts',
            lastCompany: 'Z',
            lastSalary: '15000',
            overallExp: '2',
            contactInfo: '123567890',
            yearGrad: '2019',
            gradStream: 'EEE'
        },
        {
            _id: ObjectId("63809e1e91000833b58238eb"),
            firstName: 'Rohan',
            lastName: 'Jame',
            salary: '39000',
            department: 'Technical',
            lastCompany: 'Y',
            lastSalary: '15000',
            overallExp: '1',
            contactInfo: '1234567860',
            yearGrad: '2015',
            gradStream: 'CSE'
        },
        {
            _id: ObjectId("63809e1e91000833b58238ec"),
            firstName: 'Jame',
            lastName: 'Doe',
            salary: '45000',
            department: 'Accounts',
            lastCompany: 'Z',
            lastSalary: '20000',
            overallExp: '1',
            contactInfo: '123567890',
            yearGrad: '2019',
            gradStream: 'ECE'
        },
        {
            _id: ObjectId("63809e1e91000833b58238ee"),
            firstName: 'Jame',
            lastName: 'Doe',
            salary: '35000',
            department: 'Accounts',
            lastCompany: 'Z',
            lastSalary: '15000',
            overallExp: '2',
            contactInfo: '123567890',
            yearGrad: '2019',
            gradStream: 'EEE'
        }
    ]


    const third = await collection.find(
        {
            "overallExp": { $gt: "1" },
            "yearGrad": { $gt: "2015" }
        }).toArray()

    console.log(third);

    [
        {
            _id: ObjectId("63809e1e91000833b58238e2"),
            firstName: 'John',
            lastName: 'Doe',
            salary: '25000',
            department: 'HR',
            lastCompany: 'X',
            lastSalary: '10000',
            overallExp: '2',
            contactInfo: '1234567890',
            yearGrad: '2016',
            gradStream: 'CSE'
        },
        {
            _id: ObjectId("63809e1e91000833b58238e6"),
            firstName: 'Jame',
            lastName: 'roh',
            salary: '43000',
            department: 'Accounts',
            lastCompany: 'Z',
            lastSalary: '15000',
            overallExp: '2',
            contactInfo: '123567890',
            yearGrad: '2019',
            gradStream: 'EEE'
        },
        {
            _id: ObjectId("63809e1e91000833b58238ea"),
            firstName: 'Jame',
            lastName: 'Doe',
            salary: '39000',
            department: 'Accounts',
            lastCompany: 'Z',
            lastSalary: '15000',
            overallExp: '2',
            contactInfo: '123567890',
            yearGrad: '2019',
            gradStream: 'EEE'
        },
        {
            _id: ObjectId("63809e1e91000833b58238ee"),
            firstName: 'Jame',
            lastName: 'Doe',
            salary: '35000',
            department: 'Accounts',
            lastCompany: 'Z',
            lastSalary: '15000',
            overallExp: '2',
            contactInfo: '123567890',
            yearGrad: '2019',
            gradStream: 'EEE'
        }
    ]

    const fourth = await collection.updateMany(
        {
            "salary": { $gt: "70000" }
        },
        {
            $set: {
                "salary": "65000"
            }
        }
    ).toArray

    console.log(fourth);

    {
        acknowledged: true,
            insertedId: null,
                matchedCount: 0,
                    modifiedCount: 0,
                        upsertedCount: 0

    }



    const fifth = await collection.deleteMany({ "lastComany": "Y" }).toArray()
    console.log(fifth);

    { acknowledged: true, deletedCount: 6 }


}
main();