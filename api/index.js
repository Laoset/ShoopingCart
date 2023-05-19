const data = require("./data/data");
const express = require("express");
const app = express();
var cors = require("cors");
app.use(cors());
//depedencia para post
app.use(express.json());
//REQ
app.get("/", (req, res) => {
  res.send("Bienvenido a la API ");
});
app.get("/api/usuarios", (req, res) => {
  res.send(data);
});
app.get("/api/productos", (req, res) => {
  res.send(data.products);
});

app.get("/api/usuarios/:id", (req, res) => {
  const id = Number(req.params.id);
  const usuarios = data.users.find((usuario) => usuario.id === id);
  if (usuarios) {
    res.json(usuarios);
  } else {
    res.status(404).end();
  }
});
app.get("/api/productos/:id", (req, res) => {
  const idProduct = Number(req.params.id);
  console.log(idProduct);
  const productos = data.products.find((producto) => producto.id === idProduct);
  res.json(productos);
});
app.get("/api/productos/category/:category", (req, res) => {
  const categoryProduct = req.params.category;
  console.log(categoryProduct);
  const productos = data.products.filter(
    (producto) => producto.category === categoryProduct
  );
  res.json(productos);
});
//POST DE USUARIOS
app.post("/api/usuarios", (req, res) => {
  const info = req.body;

  const ids = data.users.map((dato) => dato.id);
  const maxId = Math.max(...ids);
  const newUsuario = {
    id: maxId + 1,
    first_name: info.first_name,
    last_name: info.last_name,
    email: info.email,
    password: info.password,
  };
  data.users = [...data.users, newUsuario];
  res.json(newUsuario);
});

const PORT = 8080;
app.listen(PORT, () =>
  console.log(`Servidor en funcionamiento en el puerto ${PORT}`)
);

module.exports = app;
