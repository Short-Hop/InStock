let product = {
  name: "",
  descriptionShort: "",
  descriptionLong: "",
  orderedBy: "",
  refNumber: "",
  location: { city: "", country: "" },
  orderDate: "",
  orderBy: "",
  quantity: 12000,
  categories: ["", "", ""],
  inStock: true
};

Warehouse = {
  id: "",
  name: "",
  number: "",
  address: {
    buildingNumber: "",
    street: "",
    city: "",
    province: "",
    postalCode: "",
    country: ""
  },
  contact: {
    name: "",
    position: "",
    phone: "",
    email: ""
  },
  products: [
    {
      id: "",
      name: "",
      shortDescription: "",
      longDescription: "",
      refNumber: "",
      location: { city: "", country: "" },
      orderDate: "",
      orderBy: "",
      quantity: 0,
      categories: [],
      inStock: true
    }
  ]
};
