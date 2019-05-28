const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
app.use(express.json());

app.use("/api/warehouses", require("./routes/api/warehouses"));
app.use("/api/inventories", require("./routes/api/inventories"));

// listening
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => console.log(`server started on port ${PORT}`));
