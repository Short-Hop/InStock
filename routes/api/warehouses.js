const express = require("express");
const router = express.Router();
const fileName = __dirname + "/warehouseData.json";
let warehouseData = require(fileName);
const helper = require("../../helper/helper");

router.route("/product").post((req, res) => {
  let product = req.body;
  const found = warehouseData.find(
    warehouse => warehouse.id === warehouseData.length - 1
  );
  console.log(warehouseData.length - 1);
  if (found) {
    const newProduct = {
      id: helper.createNewId(found.products),
      warehouseId: found.id,
      name: product.product,
      shortDescription: product.description,
      longDescription: product.description,
      refNumber: "2222222",
      location: {
        city: product.city,
        country: product.country
      },
      orderDate: product.ordered,
      orderBy: "",
      quantity: product.quantity,
      categories: ""
      // status: statusinput,
    };
    console.log(newProduct);
    found.products.push(newProduct);
    helper.writeJSONFile(fileName, warehouseData);
  }
});

// Get all warehouses
router.route("/").get((req, res) => {
  res.json(warehouseData);
  //    ONLY FOR TEST FOR CREATING WAREHOUSEID
  const newWarehouseId = helper.createNewId(warehouseData);
  console.log(newWarehouseId);
  //    ONLY FOR TEST FOR CREATING WAREHOUSEID
});

// Get one warehouse using the id
router.get("/:id", (req, res) => {
  const found = warehouseData.find(
    warehouse => warehouse.id === parseInt(req.params.id)
  );
  if (found) {
    //    ONLY FOR TEST FOR CREATING PRODUCTID
    const newProductId = helper.createNewId(found.products);
    console.log(newProductId);
    //    ONLY FOR TEST FOR CREATING PRODUCTID
    res.json(
      warehouseData.filter(
        warehouse => warehouse.id === parseInt(req.params.id)
      )
    );
  } else {
    res
      .status(400)
      .json({ errorMessage: `Warehouse with ID:${req.params.id} not found` });
  }
});

router.get("/:id/product/:productId", (req, res) => {
  let found = warehouseData.find(
    warehouse => warehouse.id === parseInt(req.params.id)
  );
  if (found) {
    found = found.products.filter(
      product => req.params.productId == product.id
    );

    if (found[0]) {
      res.send(found[0]);
    } else {
      res
        .status(400)
        .send(
          `Product with ID:${req.params.productId} not found in Warehouse ${
            req.params.id
          }`
        );
    }
  } else {
    res
      .status(400)
      .json({ errorMessage: `Warehouse with ID:${req.params.id} not found` });
  }
});

router.delete("/:id/product/:productId", (req, res) => {
  let newData = warehouseData;
  let found = warehouseData.find(
    warehouse => warehouse.id === parseInt(req.params.id)
  );
  let position;

  if (found) {
    position = newData.indexOf(found);
    found.products = found.products.filter(
      product => req.params.productId != product.id
    );

    newData[0] = found;

    warehouseData = [newData];

    res.send("Product Deleted!");
  } else {
    res
      .status(400)
      .json({ errorMessage: `Warehouse with ID:${req.params.id} not found` });
  }
});

router.route("/").post((req, res) => {
  let warehouseId = helper.createNewId(warehouseData);
  const newWarehouse = {
    id: warehouseId,
    warehouse: req.body.warehouse,
    address: req.body.address,
    contact: req.body.contact,
    description: req.body.description,
    categories: [
      "Industrial",
      "Automotive",
      "Heavy",
      "Mechanical",
      "Engineering",
      "Transportation",
      "Sales"
    ],
    products: []
  };
  warehouseData.push(newWarehouse);
  helper.writeJSONFile(fileName, warehouseData);
  res.send("Warehouse correctly added.");
  res.redirect("/warehouses");
});

module.exports = router;
