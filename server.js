const express = require("express");
const path = require("path");
const app = express();
const PORT = 1024;

// Aplicação de serviços estáticos
app.use(express.static("."));

// Rota principal
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(PORT,"0.0.0.0", () => {
  console.log(`Servidor rodando em http://192.168.1.30:${PORT}/`);
});
