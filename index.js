const express = require("express");
const app     = express();

const conn    = require("./db/conn");
const Car     = require("./models/Car");
const CarItem = require("./models/CarItem");

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.json());

// verifica se há itens duplicados
const removeDuplicateItems = (items) => {
  return [...new Set(items)];
};

// verifica se o ano está no intervalo permitido
const anoValido = (ano) => {
  const anoAtual = new Date().getFullYear();

  return ano >= anoAtual - 10 && ano <= anoAtual;
};


app.post("/api/v1/cars", async (req, res) => {
  const { brand, model, year, items } = req.body;

  // Validações dos campos
  if (!brand) {
    return res.status(400).json({ error: "brand is required" });
  }
  if (!model) {
    return res.status(400).json({ error: "model is required" });
  }
  if (!year) {
    return res.status(400).json({ error: "year is required" });
  }

  // Validação do ano do carro
  if (!anoValido(parseInt(year))) {
    return res.status(400).json({error: `year should be between ${ new Date().getFullYear() - 10
      } and ${new Date().getFullYear()}`,
    });
  }

  // Validação de carro que já existe
  const carroExistente = await Car.findOne({ where: { brand, model, year } });
  if (carroExistente) {
    return res
      .status(409)
      .json({ message: "there is already a car with this data" });
  }

  const car = await Car.create({ brand, model, year });

  // Validação e remoção de itens duplicados
  if (items && Array.isArray(items)) {
    const itemEspecifico = removeDuplicateItems(items);

    if (items && Array.isArray(items)) {
      const itemEspecifico = removeDuplicateItems(items);
    
      for (let i = 0; i < itemEspecifico.length; i++) {
        await CarItem.create({ name: itemEspecifico[i], CarId: car.id });
      }
    }
  }

  res.status(201).json({ id: car.id });
});

app.get("/", (req, res) => {
  res.send("Deu certo");
});

conn
  .sync()
  .then(() => {
    app.listen(3000, () => {
      console.log("Servidor rodando na porta 3000");
    });
  })
  .catch((err) => console.log(err));