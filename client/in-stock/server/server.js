const fs = require("fs");
const Router = require("../server/routes");

let data = JSON.parse(fs.readFileSync("data.json", "utf8"));

const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");

app.use(bodyParser());
app.use(cors());
app.use(express.json());
app.use("/inventory", Router);
app.use("/location", Router);
app.use("/location/warehouseId", Router);

//data
const warehouses = [{ "id": 0, "name": "Warehouse Number ", "number": 0, "address": { "buildingNumber": "469", "street": "King St W", "city": "Toronto", "province": "ON", "postalCode": "M65GB7", "country": "CA" }, "contact": { "name": "Mara Weinberg", "position": "Warehouse Manager", "phone": "+1 416 678 2345", "email": "wienberg@instock.com" }, "products": [{ "id": "0-0", "name": "Product Name", "shortDescription": "Here is a very brief description of the product in the inventory…", "longDescription": "Here is a more detailed summary of the product name, it’s uses, industries and possible attributes that could be used to describe the product.", "refNumber": "JK2020FD7811200", "location": { "city": "Toronto", "country": "CAN" }, "orderDate": "2018-05-24", "orderBy": "Mark Saunders", "quantity": 12000, "categories": ["Industrial", "Automotive", "Heavy", "Mechanical", "Engineering", "Transportation", "Sales"], "inStock": false }, { "id": "0-1", "name": "Product Name", "shortDescription": "Here is a very brief description of the product in the inventory…", "longDescription": "Here is a more detailed summary of the product name, it’s uses, industries and possible attributes that could be used to describe the product.", "refNumber": "JK2020FD7811201", "location": { "city": "Toronto", "country": "CAN" }, "orderDate": "2018-05-24", "orderBy": "Mark Saunders", "quantity": 12000, "categories": ["Industrial", "Automotive", "Heavy", "Mechanical", "Engineering", "Transportation", "Sales"], "inStock": false }, { "id": "0-2", "name": "Product Name", "shortDescription": "Here is a very brief description of the product in the inventory…", "longDescription": "Here is a more detailed summary of the product name, it’s uses, industries and possible attributes that could be used to describe the product.", "refNumber": "JK2020FD7811202", "location": { "city": "Toronto", "country": "CAN" }, "orderDate": "2018-05-24", "orderBy": "Mark Saunders", "quantity": 12000, "categories": ["Industrial", "Automotive", "Heavy", "Mechanical", "Engineering", "Transportation", "Sales"], "inStock": true }, { "id": "0-3", "name": "Product Name", "shortDescription": "Here is a very brief description of the product in the inventory…", "longDescription": "Here is a more detailed summary of the product name, it’s uses, industries and possible attributes that could be used to describe the product.", "refNumber": "JK2020FD7811203", "location": { "city": "Toronto", "country": "CAN" }, "orderDate": "2018-05-24", "orderBy": "Mark Saunders", "quantity": 12000, "categories": ["Industrial", "Automotive", "Heavy", "Mechanical", "Engineering", "Transportation", "Sales"], "inStock": true }] }, { "id": 1, "name": "Warehouse Number ", "number": 1, "address": { "buildingNumber": "469", "street": "King St W", "city": "Toronto", "province": "ON", "postalCode": "M65GB7", "country": "CA" }, "contact": { "name": "Mara Weinberg", "position": "Warehouse Manager", "phone": "+1 416 678 2345", "email": "wienberg@instock.com" }, "products": [{ "id": "1-0", "name": "Product Name", "shortDescription": "Here is a very brief description of the product in the inventory…", "longDescription": "Here is a more detailed summary of the product name, it’s uses, industries and possible attributes that could be used to describe the product.", "refNumber": "JK2020FD7811210", "location": { "city": "Toronto", "country": "CAN" }, "orderDate": "2018-05-24", "orderBy": "Mark Saunders", "quantity": 12000, "categories": ["Industrial", "Automotive", "Heavy", "Mechanical", "Engineering", "Transportation", "Sales"], "inStock": false }, { "id": "1-1", "name": "Product Name", "shortDescription": "Here is a very brief description of the product in the inventory…", "longDescription": "Here is a more detailed summary of the product name, it’s uses, industries and possible attributes that could be used to describe the product.", "refNumber": "JK2020FD7811211", "location": { "city": "Toronto", "country": "CAN" }, "orderDate": "2018-05-24", "orderBy": "Mark Saunders", "quantity": 12000, "categories": ["Industrial", "Automotive", "Heavy", "Mechanical", "Engineering", "Transportation", "Sales"], "inStock": true }, { "id": "1-2", "name": "Product Name", "shortDescription": "Here is a very brief description of the product in the inventory…", "longDescription": "Here is a more detailed summary of the product name, it’s uses, industries and possible attributes that could be used to describe the product.", "refNumber": "JK2020FD7811212", "location": { "city": "Toronto", "country": "CAN" }, "orderDate": "2018-05-24", "orderBy": "Mark Saunders", "quantity": 12000, "categories": ["Industrial", "Automotive", "Heavy", "Mechanical", "Engineering", "Transportation", "Sales"], "inStock": false }, { "id": "1-3", "name": "Product Name", "shortDescription": "Here is a very brief description of the product in the inventory…", "longDescription": "Here is a more detailed summary of the product name, it’s uses, industries and possible attributes that could be used to describe the product.", "refNumber": "JK2020FD7811213", "location": { "city": "Toronto", "country": "CAN" }, "orderDate": "2018-05-24", "orderBy": "Mark Saunders", "quantity": 12000, "categories": ["Industrial", "Automotive", "Heavy", "Mechanical", "Engineering", "Transportation", "Sales"], "inStock": true }] }, { "id": 2, "name": "Warehouse Number ", "number": 2, "address": { "buildingNumber": "469", "street": "King St W", "city": "Toronto", "province": "ON", "postalCode": "M65GB7", "country": "CA" }, "contact": { "name": "Mara Weinberg", "position": "Warehouse Manager", "phone": "+1 416 678 2345", "email": "wienberg@instock.com" }, "products": [{ "id": "2-0", "name": "Product Name", "shortDescription": "Here is a very brief description of the product in the inventory…", "longDescription": "Here is a more detailed summary of the product name, it’s uses, industries and possible attributes that could be used to describe the product.", "refNumber": "JK2020FD7811220", "location": { "city": "Toronto", "country": "CAN" }, "orderDate": "2018-05-24", "orderBy": "Mark Saunders", "quantity": 12000, "categories": ["Industrial", "Automotive", "Heavy", "Mechanical", "Engineering", "Transportation", "Sales"], "inStock": false }, { "id": "2-1", "name": "Product Name", "shortDescription": "Here is a very brief description of the product in the inventory…", "longDescription": "Here is a more detailed summary of the product name, it’s uses, industries and possible attributes that could be used to describe the product.", "refNumber": "JK2020FD7811221", "location": { "city": "Toronto", "country": "CAN" }, "orderDate": "2018-05-24", "orderBy": "Mark Saunders", "quantity": 12000, "categories": ["Industrial", "Automotive", "Heavy", "Mechanical", "Engineering", "Transportation", "Sales"], "inStock": false }, { "id": "2-2", "name": "Product Name", "shortDescription": "Here is a very brief description of the product in the inventory…", "longDescription": "Here is a more detailed summary of the product name, it’s uses, industries and possible attributes that could be used to describe the product.", "refNumber": "JK2020FD7811222", "location": { "city": "Toronto", "country": "CAN" }, "orderDate": "2018-05-24", "orderBy": "Mark Saunders", "quantity": 12000, "categories": ["Industrial", "Automotive", "Heavy", "Mechanical", "Engineering", "Transportation", "Sales"], "inStock": false }, { "id": "2-3", "name": "Product Name", "shortDescription": "Here is a very brief description of the product in the inventory…", "longDescription": "Here is a more detailed summary of the product name, it’s uses, industries and possible attributes that could be used to describe the product.", "refNumber": "JK2020FD7811223", "location": { "city": "Toronto", "country": "CAN" }, "orderDate": "2018-05-24", "orderBy": "Mark Saunders", "quantity": 12000, "categories": ["Industrial", "Automotive", "Heavy", "Mechanical", "Engineering", "Transportation", "Sales"], "inStock": false }] }, { "id": 3, "name": "Warehouse Number ", "number": 3, "address": { "buildingNumber": "469", "street": "King St W", "city": "Toronto", "province": "ON", "postalCode": "M65GB7", "country": "CA" }, "contact": { "name": "Mara Weinberg", "position": "Warehouse Manager", "phone": "+1 416 678 2345", "email": "wienberg@instock.com" }, "products": [{ "id": "3-0", "name": "Product Name", "shortDescription": "Here is a very brief description of the product in the inventory…", "longDescription": "Here is a more detailed summary of the product name, it’s uses, industries and possible attributes that could be used to describe the product.", "refNumber": "JK2020FD7811230", "location": { "city": "Toronto", "country": "CAN" }, "orderDate": "2018-05-24", "orderBy": "Mark Saunders", "quantity": 12000, "categories": ["Industrial", "Automotive", "Heavy", "Mechanical", "Engineering", "Transportation", "Sales"], "inStock": false }, { "id": "3-1", "name": "Product Name", "shortDescription": "Here is a very brief description of the product in the inventory…", "longDescription": "Here is a more detailed summary of the product name, it’s uses, industries and possible attributes that could be used to describe the product.", "refNumber": "JK2020FD7811231", "location": { "city": "Toronto", "country": "CAN" }, "orderDate": "2018-05-24", "orderBy": "Mark Saunders", "quantity": 12000, "categories": ["Industrial", "Automotive", "Heavy", "Mechanical", "Engineering", "Transportation", "Sales"], "inStock": false }, { "id": "3-2", "name": "Product Name", "shortDescription": "Here is a very brief description of the product in the inventory…", "longDescription": "Here is a more detailed summary of the product name, it’s uses, industries and possible attributes that could be used to describe the product.", "refNumber": "JK2020FD7811232", "location": { "city": "Toronto", "country": "CAN" }, "orderDate": "2018-05-24", "orderBy": "Mark Saunders", "quantity": 12000, "categories": ["Industrial", "Automotive", "Heavy", "Mechanical", "Engineering", "Transportation", "Sales"], "inStock": true }, { "id": "3-3", "name": "Product Name", "shortDescription": "Here is a very brief description of the product in the inventory…", "longDescription": "Here is a more detailed summary of the product name, it’s uses, industries and possible attributes that could be used to describe the product.", "refNumber": "JK2020FD7811233", "location": { "city": "Toronto", "country": "CAN" }, "orderDate": "2018-05-24", "orderBy": "Mark Saunders", "quantity": 12000, "categories": ["Industrial", "Automotive", "Heavy", "Mechanical", "Engineering", "Transportation", "Sales"], "inStock": false }] }, { "id": 4, "name": "Warehouse Number ", "number": 4, "address": { "buildingNumber": "469", "street": "King St W", "city": "Toronto", "province": "ON", "postalCode": "M65GB7", "country": "CA" }, "contact": { "name": "Mara Weinberg", "position": "Warehouse Manager", "phone": "+1 416 678 2345", "email": "wienberg@instock.com" }, "products": [{ "id": "4-0", "name": "Product Name", "shortDescription": "Here is a very brief description of the product in the inventory…", "longDescription": "Here is a more detailed summary of the product name, it’s uses, industries and possible attributes that could be used to describe the product.", "refNumber": "JK2020FD7811240", "location": { "city": "Toronto", "country": "CAN" }, "orderDate": "2018-05-24", "orderBy": "Mark Saunders", "quantity": 12000, "categories": ["Industrial", "Automotive", "Heavy", "Mechanical", "Engineering", "Transportation", "Sales"], "inStock": false }, { "id": "4-1", "name": "Product Name", "shortDescription": "Here is a very brief description of the product in the inventory…", "longDescription": "Here is a more detailed summary of the product name, it’s uses, industries and possible attributes that could be used to describe the product.", "refNumber": "JK2020FD7811241", "location": { "city": "Toronto", "country": "CAN" }, "orderDate": "2018-05-24", "orderBy": "Mark Saunders", "quantity": 12000, "categories": ["Industrial", "Automotive", "Heavy", "Mechanical", "Engineering", "Transportation", "Sales"], "inStock": true }, { "id": "4-2", "name": "Product Name", "shortDescription": "Here is a very brief description of the product in the inventory…", "longDescription": "Here is a more detailed summary of the product name, it’s uses, industries and possible attributes that could be used to describe the product.", "refNumber": "JK2020FD7811242", "location": { "city": "Toronto", "country": "CAN" }, "orderDate": "2018-05-24", "orderBy": "Mark Saunders", "quantity": 12000, "categories": ["Industrial", "Automotive", "Heavy", "Mechanical", "Engineering", "Transportation", "Sales"], "inStock": false }, { "id": "4-3", "name": "Product Name", "shortDescription": "Here is a very brief description of the product in the inventory…", "longDescription": "Here is a more detailed summary of the product name, it’s uses, industries and possible attributes that could be used to describe the product.", "refNumber": "JK2020FD7811243", "location": { "city": "Toronto", "country": "CAN" }, "orderDate": "2018-05-24", "orderBy": "Mark Saunders", "quantity": 12000, "categories": ["Industrial", "Automotive", "Heavy", "Mechanical", "Engineering", "Transportation", "Sales"], "inStock": true }] }, { "id": 5, "name": "Warehouse Number ", "number": 5, "address": { "buildingNumber": "469", "street": "King St W", "city": "Toronto", "province": "ON", "postalCode": "M65GB7", "country": "CA" }, "contact": { "name": "Mara Weinberg", "position": "Warehouse Manager", "phone": "+1 416 678 2345", "email": "wienberg@instock.com" }, "products": [{ "id": "5-0", "name": "Product Name", "shortDescription": "Here is a very brief description of the product in the inventory…", "longDescription": "Here is a more detailed summary of the product name, it’s uses, industries and possible attributes that could be used to describe the product.", "refNumber": "JK2020FD7811250", "location": { "city": "Toronto", "country": "CAN" }, "orderDate": "2018-05-24", "orderBy": "Mark Saunders", "quantity": 12000, "categories": ["Industrial", "Automotive", "Heavy", "Mechanical", "Engineering", "Transportation", "Sales"], "inStock": true }, { "id": "5-1", "name": "Product Name", "shortDescription": "Here is a very brief description of the product in the inventory…", "longDescription": "Here is a more detailed summary of the product name, it’s uses, industries and possible attributes that could be used to describe the product.", "refNumber": "JK2020FD7811251", "location": { "city": "Toronto", "country": "CAN" }, "orderDate": "2018-05-24", "orderBy": "Mark Saunders", "quantity": 12000, "categories": ["Industrial", "Automotive", "Heavy", "Mechanical", "Engineering", "Transportation", "Sales"], "inStock": false }, { "id": "5-2", "name": "Product Name", "shortDescription": "Here is a very brief description of the product in the inventory…", "longDescription": "Here is a more detailed summary of the product name, it’s uses, industries and possible attributes that could be used to describe the product.", "refNumber": "JK2020FD7811252", "location": { "city": "Toronto", "country": "CAN" }, "orderDate": "2018-05-24", "orderBy": "Mark Saunders", "quantity": 12000, "categories": ["Industrial", "Automotive", "Heavy", "Mechanical", "Engineering", "Transportation", "Sales"], "inStock": true }, { "id": "5-3", "name": "Product Name", "shortDescription": "Here is a very brief description of the product in the inventory…", "longDescription": "Here is a more detailed summary of the product name, it’s uses, industries and possible attributes that could be used to describe the product.", "refNumber": "JK2020FD7811253", "location": { "city": "Toronto", "country": "CAN" }, "orderDate": "2018-05-24", "orderBy": "Mark Saunders", "quantity": 12000, "categories": ["Industrial", "Automotive", "Heavy", "Mechanical", "Engineering", "Transportation", "Sales"], "inStock": true }] }];

// get routes
app.get("/", (req, res) => {
  res.json(warehouses);
  console.log(warehouses)
});

app.get("/inventory", (req, res) => {
  res.json(warehouses);
});

app.get("/location", (req, res) => {
  res.json(warehouses);
});

//post routes

// listening
app.listen(8080, (req, res) => {
  console.log("Listening... on 8080");
});
