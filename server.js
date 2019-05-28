const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
app.use(express.json());

app.use("/api/warehouses", require("./routes/api/warehouses"));

// app.get("/warehouses", (req, res) => {
//   res.json(warehouses);
//   console.log(warehouses[3].id);
// });

// app.get("/warehouses/:name", (req, res) => {
//   res.json(infoController.getInfo(req.params.name));
// });

// //get warehouse id
// const inventoryController = {
//   getInventory: id => {
//     console.log(id);
//     const eachInventory = warehouses.find(
//       eachInventory => eachInventory.id.lowerCase() === id.lowerCase()
//     );
//     console.log(eachInventory);
//     return eachInventory;
//   }
// };

// //get inventory information
// const infoController = {
//   getInfo: id => {
//     console.log(id);
//     const inventory = inventoryController.getInventory(id);
//     console.log(inventory);
//     const info = {
//       name: inventory.name,
//       street: inventory.address.street,
//       postalCode: inventory.address.postalCode
//     };
//     return info;
//   }
// };

// listening
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => console.log(`server started on port ${PORT}`));
