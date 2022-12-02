// test > use Human_Resourse
// switched to db Human_Resourse
// Human_Resourse > db.employee.insertMany([
//     ...    {
//         ...   "firstName": "John",
//         ...     "lastName": "Doe",
//         ...     "salary": "25000",
//         ...     "department": "HR",
//         ...     "lastCompany": "X",
//         ...     "lastSalary": "10000",
//         ...     "overallExp": "2",
//         ...     "contactInfo": "1234567890",
//         ...     "yearGrad": "2016",
//         ...     "gradStream": "CSE"
// ...     },
//     ...   {
//         ...     "firstName": "Rohan",
//         ...     "lastName": "Jame",
//         ...     "salary": "52000",
//         ...     "department": "Technical",
//         ...     "lastCompany": "Y",
//         ...     "lastSalary": "15000",
//         ...     "overallExp": "1",
//         ...     "contactInfo": "1234567860",
//         ...     "yearGrad": "2015",
//         ...     "gradStream": "CSE"
// ...     },
//     ...     {
//         ...     "firstName": "Jame",
//         ...     "lastName": "Doe",
//         ...     "salary": "37000",
//         ...     "department": "Accounts",
//         ...     "lastCompany": "Z",
//         ...     "lastSalary": "20000",
//         ...     "overallExp": "1",
//         ...     "contactInfo": "123567890",
//         ...     "yearGrad": "2019",
//         ...     "gradStream": "ECE"
// ...     },
//     ...     {
//         ...     "firstName": "Sao",
//         ...     "lastName": "Avika",
//         ...     "salary": "30000",
//         ...     "department": "Sales",
//         ...     "lastCompany": "Y",
//         ...     "lastSalary": "39000",
//         ...     "overallExp": "2",
//         ...     "contactInfo": "1234567860",
//         ...     "yearGrad": "2015",
//         ...     "gradStream": "CSE"
// ...     },
//     ...     {
//         ...     "firstName": "Jame",
//         ...     "lastName": "roh",
//         ...     "salary": "43000",
//         ...     "department": "Accounts",
//         ...     "lastCompany": "Z",
//         ...     "lastSalary": "15000",
//         ...     "overallExp": "2",
//         ...     "contactInfo": "123567890",
//         ...     "yearGrad": "2019",
//         ...     "gradStream": "EEE"
// ...     },
//     ...     {
//         ...     "firstName": "Rohan",
//         ...     "lastName": "Jame",
//         ...     "salary": "65000",
//         ...     "department": "Technical",
//         ...     "lastCompany": "Y",
//         ...     "lastSalary": "15000",
//         ...     "overallExp": "1",
//         ...     "contactInfo": "1234567860",
//         ...     "yearGrad": "2015",
//         ...     "gradStream": "CSE"
// ...     },
//     ...     {
//         ...     "firstName": "Jame",
//         ...     "lastName": "Doe",
//         ...     "salary": "42000",
//         ...     "department": "Accounts",
//         ...     "lastCompany": "Z",
//         ...     "lastSalary": "20000",
//         ...     "overallExp": "1",
//         ...     "contactInfo": "123567890",
//         ...     "yearGrad": "2019",
//         ...     "gradStream": "ECE"
// ...     },
//     ...     {
//         ...     "firstName": "Sao",
//         ...     "lastName": "Avika",
//         ...     "salary": "40000",
//         ...     "department": "Sales",
//         ...     "lastCompany": "Y",
//         ...     "lastSalary": "15000",
//         ...     "overallExp": "2",
//         ...     "contactInfo": "1234567860",
//         ...     "yearGrad": "2015",
//         ...     "gradStream": "CSE"
// ...     },
//     ...     {
//         ...     "firstName": "Jame",
//         ...     "lastName": "Doe",
//         ...     "salary": "39000",
//         ...     "department": "Accounts",
//         ...     "lastCompany": "Z",
//         ...     "lastSalary": "15000",
//         ...     "overallExp": "2",
//         ...     "contactInfo": "123567890",
//         ...     "yearGrad": "2019",
//         ...     "gradStream": "EEE"
// ...     },
//     ...     {
//         ...     "firstName": "Rohan",
//         ...     "lastName": "Jame",
//         ...     "salary": "39000",
//         ...     "department": "Technical",
//         ...     "lastCompany": "Y",
//         ...     "lastSalary": "15000",
//         ...     "overallExp": "1",
//         ...     "contactInfo": "1234567860",
//         ...     "yearGrad": "2015",
//         ...     "gradStream": "CSE"
// ...     },
//     ...     {
//         ...     "firstName": "Jame",
//         ...     "lastName": "Doe",
//         ...     "salary": "45000",
//         ...     "department": "Accounts",
//         ...     "lastCompany": "Z",
//         ...     "lastSalary": "20000",
//         ...     "overallExp": "1",
//         ...     "contactInfo": "123567890",
//         ...     "yearGrad": "2019",
//         ...     "gradStream": "ECE"
// ...     },
//     ...     {
//         ...     "firstName": "Sao",
//         ...     "lastName": "Avika",
//         ...     "salary": "30000",
//         ...     "department": "Sales",
//         ...     "lastCompany": "Y",
//         ...     "lastSalary": "55000",
//         ...     "overallExp": "2",
//         ...     "contactInfo": "1234567860",
//         ...     "yearGrad": "2015",
//         ...     "gradStream": "CSE"
// ...     },
//     ...     {
//         ...     "firstName": "Jame",
//         ...     "lastName": "Doe",
//         ...     "salary": "35000",
//         ...     "department": "Accounts",
//         ...     "lastCompany": "Z",
//         ...     "lastSalary": "15000",
//         ...     "overallExp": "2",
//         ...     "contactInfo": "123567890",
//         ...     "yearGrad": "2019",
//         ...     "gradStream": "EEE"
// ...     }
// ...
// ...   ]);
// {
//     acknowledged: true,
//         insertedIds: {
//         '0': ObjectId("63809e1e91000833b58238e2"),
//             '1': ObjectId("63809e1e91000833b58238e3"),
//                 '2': ObjectId("63809e1e91000833b58238e4"),
//                     '3': ObjectId("63809e1e91000833b58238e5"),
//                         '4': ObjectId("63809e1e91000833b58238e6"),
//                             '5': ObjectId("63809e1e91000833b58238e7"),
//                                 '6': ObjectId("63809e1e91000833b58238e8"),
//                                     '7': ObjectId("63809e1e91000833b58238e9"),
//                                         '8': ObjectId("63809e1e91000833b58238ea"),
//                                             '9': ObjectId("63809e1e91000833b58238eb"),
//                                                 '10': ObjectId("63809e1e91000833b58238ec"),
//                                                     '11': ObjectId("63809e1e91000833b58238ed"),
//                                                         '12': ObjectId("63809e1e91000833b58238ee")
//     }
// }


// Human_Resourse > db.employee.find().pretty()
// [
//     {
//         _id: ObjectId("63809e1e91000833b58238e2"),
//         firstName: 'John',
//         lastName: 'Doe',
//         salary: '25000',
//         department: 'HR',
//         lastCompany: 'X',
//         lastSalary: '10000',
//         overallExp: '2',
//         contactInfo: '1234567890',
//         yearGrad: '2016',
//         gradStream: 'CSE'
//     },
//     {
//         _id: ObjectId("63809e1e91000833b58238e3"),
//         firstName: 'Rohan',
//         lastName: 'Jame',
//         salary: '52000',
//         department: 'Technical',
//         lastCompany: 'Y',
//         lastSalary: '15000',
//         overallExp: '1',
//         contactInfo: '1234567860',
//         yearGrad: '2015',
//         gradStream: 'CSE'
//     },
//     {
//         _id: ObjectId("63809e1e91000833b58238e4"),
//         firstName: 'Jame',
//         lastName: 'Doe',
//         salary: '37000',
//         department: 'Accounts',
//         lastCompany: 'Z',
//         lastSalary: '20000',
//         overallExp: '1',
//         contactInfo: '123567890',
//         yearGrad: '2019',
//         gradStream: 'ECE'
//     },
//     {
//         _id: ObjectId("63809e1e91000833b58238e5"),
//         firstName: 'Sao',
//         lastName: 'Avika',
//         salary: '30000',
//         department: 'Sales',
//         lastCompany: 'Y',
//         lastSalary: '39000',
//         overallExp: '2',
//         contactInfo: '1234567860',
//         yearGrad: '2015',
//         gradStream: 'CSE'
//     },
//     {
//         _id: ObjectId("63809e1e91000833b58238e6"),
//         firstName: 'Jame',
//         lastName: 'roh',
//         salary: '43000',
//         department: 'Accounts',
//         lastCompany: 'Z',
//         lastSalary: '15000',
//         overallExp: '2',
//         contactInfo: '123567890',
//         yearGrad: '2019',
//         gradStream: 'EEE'
//     },
//     {
//         _id: ObjectId("63809e1e91000833b58238e7"),
//         firstName: 'Rohan',
//         lastName: 'Jame',
//         salary: '65000',
//         department: 'Technical',
//         lastCompany: 'Y',
//         lastSalary: '15000',
//         overallExp: '1',
//         contactInfo: '1234567860',
//         yearGrad: '2015',
//         gradStream: 'CSE'
//     },
//     {
//         _id: ObjectId("63809e1e91000833b58238e8"),
//         firstName: 'Jame',
//         lastName: 'Doe',
//         salary: '42000',
//         department: 'Accounts',
//         lastCompany: 'Z',
//         lastSalary: '20000',
//         overallExp: '1',
//         contactInfo: '123567890',
//         yearGrad: '2019',
//         gradStream: 'ECE'
//     },
//     {
//         _id: ObjectId("63809e1e91000833b58238e9"),
//         firstName: 'Sao',
//         lastName: 'Avika',
//         salary: '40000',
//         department: 'Sales',
//         lastCompany: 'Y',
//         lastSalary: '15000',
//         overallExp: '2',
//         contactInfo: '1234567860',
//         yearGrad: '2015',
//         gradStream: 'CSE'
//     },
//     {
//         _id: ObjectId("63809e1e91000833b58238ea"),
//         firstName: 'Jame',
//         lastName: 'Doe',
//         salary: '39000',
//         department: 'Accounts',
//         lastCompany: 'Z',
//         lastSalary: '15000',
//         overallExp: '2',
//         contactInfo: '123567890',
//         yearGrad: '2019',
//         gradStream: 'EEE'
//     },
//     {
//         _id: ObjectId("63809e1e91000833b58238eb"),
//         firstName: 'Rohan',
//         lastName: 'Jame',
//         salary: '39000',
//         department: 'Technical',
//         lastCompany: 'Y',
//         lastSalary: '15000',
//         overallExp: '1',
//         contactInfo: '1234567860',
//         yearGrad: '2015',
//         gradStream: 'CSE'
//     },
//     {
//         _id: ObjectId("63809e1e91000833b58238ec"),
//         firstName: 'Jame',
//         lastName: 'Doe',
//         salary: '45000',
//         department: 'Accounts',
//         lastCompany: 'Z',
//         lastSalary: '20000',
//         overallExp: '1',
//         contactInfo: '123567890',
//         yearGrad: '2019',
//         gradStream: 'ECE'
//     },
//     {
//         _id: ObjectId("63809e1e91000833b58238ed"),
//         firstName: 'Sao',
//         lastName: 'Avika',
//         salary: '30000',
//         department: 'Sales',
//         lastCompany: 'Y',
//         lastSalary: '55000',
//         overallExp: '2',
//         contactInfo: '1234567860',
//         yearGrad: '2015',
//         gradStream: 'CSE'
//     },
//     {
//         _id: ObjectId("63809e1e91000833b58238ee"),
//         firstName: 'Jame',
//         lastName: 'Doe',
//         salary: '35000',
//         department: 'Accounts',
//         lastCompany: 'Z',
//         lastSalary: '15000',
//         overallExp: '2',
//         contactInfo: '123567890',
//         yearGrad: '2019',
//         gradStream: 'EEE'
//     }
// ]

// // Query the collection ""employee"" and list the employees who are having salary more than 30000

// Human_Resourse > db.employee.find({ "salary": { $gt: "30000" } });
// [
//     {
//         _id: ObjectId("63809e1e91000833b58238e3"),
//         firstName: 'Rohan',
//         lastName: 'Jame',
//         salary: '52000',
//         department: 'Technical',
//         lastCompany: 'Y',
//         lastSalary: '15000',
//         overallExp: '1',
//         contactInfo: '1234567860',
//         yearGrad: '2015',
//         gradStream: 'CSE'
//     },
//     {
//         _id: ObjectId("63809e1e91000833b58238e4"),
//         firstName: 'Jame',
//         lastName: 'Doe',
//         salary: '37000',
//         department: 'Accounts',
//         lastCompany: 'Z',
//         lastSalary: '20000',
//         overallExp: '1',
//         contactInfo: '123567890',
//         yearGrad: '2019',
//         gradStream: 'ECE'
//     },
//     {
//         _id: ObjectId("63809e1e91000833b58238e6"),
//         firstName: 'Jame',
//         lastName: 'roh',
//         salary: '43000',
//         department: 'Accounts',
//         lastCompany: 'Z',
//         lastSalary: '15000',
//         overallExp: '2',
//         contactInfo: '123567890',
//         yearGrad: '2019',
//         gradStream: 'EEE'
//     },
//     {
//         _id: ObjectId("63809e1e91000833b58238e7"),
//         firstName: 'Rohan',
//         lastName: 'Jame',
//         salary: '65000',
//         department: 'Technical',
//         lastCompany: 'Y',
//         lastSalary: '15000',
//         overallExp: '1',
//         contactInfo: '1234567860',
//         yearGrad: '2015',
//         gradStream: 'CSE'
//     },
//     {
//         _id: ObjectId("63809e1e91000833b58238e8"),
//         firstName: 'Jame',
//         lastName: 'Doe',
//         salary: '42000',
//         department: 'Accounts',
//         lastCompany: 'Z',
//         lastSalary: '20000',
//         overallExp: '1',
//         contactInfo: '123567890',
//         yearGrad: '2019',
//         gradStream: 'ECE'
//     },
//     {
//         _id: ObjectId("63809e1e91000833b58238e9"),
//         firstName: 'Sao',
//         lastName: 'Avika',
//         salary: '40000',
//         department: 'Sales',
//         lastCompany: 'Y',
//         lastSalary: '15000',
//         overallExp: '2',
//         contactInfo: '1234567860',
//         yearGrad: '2015',
//         gradStream: 'CSE'
//     },
//     {
//         _id: ObjectId("63809e1e91000833b58238ea"),
//         firstName: 'Jame',
//         lastName: 'Doe',
//         salary: '39000',
//         department: 'Accounts',
//         lastCompany: 'Z',
//         lastSalary: '15000',
//         overallExp: '2',
//         contactInfo: '123567890',
//         yearGrad: '2019',
//         gradStream: 'EEE'
//     },
//     {
//         _id: ObjectId("63809e1e91000833b58238eb"),
//         firstName: 'Rohan',
//         lastName: 'Jame',
//         salary: '39000',
//         department: 'Technical',
//         lastCompany: 'Y',
//         lastSalary: '15000',
//         overallExp: '1',
//         contactInfo: '1234567860',
//         yearGrad: '2015',
//         gradStream: 'CSE'
//     },
//     {
//         _id: ObjectId("63809e1e91000833b58238ec"),
//         firstName: 'Jame',
//         lastName: 'Doe',
//         salary: '45000',
//         department: 'Accounts',
//         lastCompany: 'Z',
//         lastSalary: '20000',
//         overallExp: '1',
//         contactInfo: '123567890',
//         yearGrad: '2019',
//         gradStream: 'ECE'
//     },
//     {
//         _id: ObjectId("63809e1e91000833b58238ee"),
//         firstName: 'Jame',
//         lastName: 'Doe',
//         salary: '35000',
//         department: 'Accounts',
//         lastCompany: 'Z',
//         lastSalary: '15000',
//         overallExp: '2',
//         contactInfo: '123567890',
//         yearGrad: '2019',
//         gradStream: 'EEE'
//     }
// ]

// //Query the collection ""employee"" and list the employees who are having experience more than 2 years.

// No - one


// //Query the collection ""employee"" and list the employees who are graduated after 2015 and having experience more than 1 year


// Human_Resourse > db.employee.find({ "overallExp": { $gt: "1" }, "yearGrad": { $gt: "2015" } });
// [
//     {
//         _id: ObjectId("63809e1e91000833b58238e2"),
//         firstName: 'John',
//         lastName: 'Doe',
//         salary: '25000',
//         department: 'HR',
//         lastCompany: 'X',
//         lastSalary: '10000',
//         overallExp: '2',
//         contactInfo: '1234567890',
//         yearGrad: '2016',
//         gradStream: 'CSE'
//     },
//     {
//         _id: ObjectId("63809e1e91000833b58238e6"),
//         firstName: 'Jame',
//         lastName: 'roh',
//         salary: '43000',
//         department: 'Accounts',
//         lastCompany: 'Z',
//         lastSalary: '15000',
//         overallExp: '2',
//         contactInfo: '123567890',
//         yearGrad: '2019',
//         gradStream: 'EEE'
//     },
//     {
//         _id: ObjectId("63809e1e91000833b58238ea"),
//         firstName: 'Jame',
//         lastName: 'Doe',
//         salary: '39000',
//         department: 'Accounts',
//         lastCompany: 'Z',
//         lastSalary: '15000',
//         overallExp: '2',
//         contactInfo: '123567890',
//         yearGrad: '2019',
//         gradStream: 'EEE'
//     },
//     {
//         _id: ObjectId("63809e1e91000833b58238ee"),
//         firstName: 'Jame',
//         lastName: 'Doe',
//         salary: '35000',
//         department: 'Accounts',
//         lastCompany: 'Z',
//         lastSalary: '15000',
//         overallExp: '2',
//         contactInfo: '123567890',
//         yearGrad: '2019',
//         gradStream: 'EEE'
//     }
// ]

// //Query the collection ""employee"" and update the salary of the employee whose salary is greater than 70000 to 65000.


// Human_Resourse > db.employee.updateMany({ "salary": { $gt: "70000" } }, { $set: { "salary": "65000" } });
// {
//     acknowledged: true,
//         insertedId: null,
//             matchedCount: 0,
//                 modifiedCount: 0,
//                     upsertedCount: 0
// }


// //Delete all the documents from ""employee"" where last company is Y"

// Human_Resourse > db.employee.deleteMany({ "lastCompany": "Y" });
// { acknowledged: true, deletedCount: 6 }

// Human_Resourse > db.employee.find()
// [
//     {
//         _id: ObjectId("63809e1e91000833b58238e2"),
//         firstName: 'John',
//         lastName: 'Doe',
//         salary: '25000',
//         department: 'HR',
//         lastCompany: 'X',
//         lastSalary: '10000',
//         overallExp: '2',
//         contactInfo: '1234567890',
//         yearGrad: '2016',
//         gradStream: 'CSE'
//     },
//     {
//         _id: ObjectId("63809e1e91000833b58238e4"),
//         firstName: 'Jame',
//         lastName: 'Doe',
//         salary: '37000',
//         department: 'Accounts',
//         lastCompany: 'Z',
//         lastSalary: '20000',
//         overallExp: '1',
//         contactInfo: '123567890',
//         yearGrad: '2019',
//         gradStream: 'ECE'
//     },
//     {
//         _id: ObjectId("63809e1e91000833b58238e6"),
//         firstName: 'Jame',
//         lastName: 'roh',
//         salary: '43000',
//         department: 'Accounts',
//         lastCompany: 'Z',
//         lastSalary: '15000',
//         overallExp: '2',
//         contactInfo: '123567890',
//         yearGrad: '2019',
//         gradStream: 'EEE'
//     },
//     {
//         _id: ObjectId("63809e1e91000833b58238e8"),
//         firstName: 'Jame',
//         lastName: 'Doe',
//         salary: '42000',
//         department: 'Accounts',
//         lastCompany: 'Z',
//         lastSalary: '20000',
//         overallExp: '1',
//         contactInfo: '123567890',
//         yearGrad: '2019',
//         gradStream: 'ECE'
//     },
//     {
//         _id: ObjectId("63809e1e91000833b58238ea"),
//         firstName: 'Jame',
//         lastName: 'Doe',
//         salary: '39000',
//         department: 'Accounts',
//         lastCompany: 'Z',
//         lastSalary: '15000',
//         overallExp: '2',
//         contactInfo: '123567890',
//         yearGrad: '2019',
//         gradStream: 'EEE'
//     },
//     {
//         _id: ObjectId("63809e1e91000833b58238ec"),
//         firstName: 'Jame',
//         lastName: 'Doe',
//         salary: '45000',
//         department: 'Accounts',
//         lastCompany: 'Z',
//         lastSalary: '20000',
//         overallExp: '1',
//         contactInfo: '123567890',
//         yearGrad: '2019',
//         gradStream: 'ECE'
//     },
//     {
//         _id: ObjectId("63809e1e91000833b58238ee"),
//         firstName: 'Jame',
//         lastName: 'Doe',
//         salary: '35000',
//         department: 'Accounts',
//         lastCompany: 'Z',
//         lastSalary: '15000',
//         overallExp: '2',
//         contactInfo: '123567890',
//         yearGrad: '2019',
//         gradStream: 'EEE'
//     }
// ]


