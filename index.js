const express = require("express");
const app = express();
app.use(express.json());

app.listen(3000, console.log("サーバが開始されました"));

app.get("/", (req, res) => {
  res.send("プログラミングへようこそ");
});

const customers = [
  { title: "田中", id: 1 },
  { title: "斉藤", id: 2 },
  { title: "鈴木", id: 3 },
  { title: "橋本", id: 4 },
  { title: "安藤", id: 5 },
];

app.get("/api/customers", (req, res) => {
  res.send(customers);
});

app.get("/api/customers/:id", (req, res) => {
  const customer = customers.find((c) => c.id === parseInt(req.params.id));
  res.send(customer);
});

app.post("/api/customers", (req, res) => {
  const customer = {
    title: req.body.title,
    id: customers.length + 1,
  };
  customers.push(customer);
  res.send(customers);
});

app.put("/api/customers/:id", (req, res) => {
  const customer = customers.find((c) => c.id === parseInt(req.params.id));
  customer.title = req.body.title;
  res.send(customer);
});

app.delete("/api/customers/:id", (req, res) => {
  const customer = customers.find((c) => c.id === parseInt(req.params.id));
  const index = customers.indexOf(customer);
  customers.splice(index, 1);
  res.send(customer);
});
