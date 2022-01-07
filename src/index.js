const express = require("express");
const { v4: uuidv4 } = require("uuid");

const app = express();

app.use(express.json());


const livros = [];


// Middleware

function verifyIfBookExists(request, response, next) {
  const { nome } = request.body;

  const livro = livros.find((livro) => livro.nome === nome);

  if(!livro) {
    return response.status(404).json({ error: "Livro não encontrado!" });
  }

  request.livro = livro;

  return next();
}


//Cadastrar livro
app.post("/cadastro", (request, response) => {

  const { nome, autor, ano } = request.body;

  const livro = {
    nome,
    autor,
    ano,
    id: uuidv4()
  }

  livros.push(livro);

  return response.status(201).send({ message: "Livro cadastrado com sucesso!" });

});

// Recuperar livro pelo nome
app.get("/livro", verifyIfBookExists, (request, response) => {
  const { livro } = request;

  return response.json(livro);
});

// Recuperar todos os livros cadastrados
app.get("/biblioteca", (request, response) => {
  return response.json(livros);
});

// Deletar um livro pelo nome
app.delete("/biblioteca/delete", (request, response) => {
  const { nome } = request.body;

  const livroQueVaiSerDeletado = livros.find((livro) => livro.nome === nome);

  if(!livroQueVaiSerDeletado) {
    return response.status(404).json({ error: "Livro não encontrado!" });
  }

  livros.forEach((livro, index) => {
    if(livro === livroQueVaiSerDeletado) {
      livros.splice(index, 1);
    }
  })  

  return response.json({ message: "Livro deletado com sucesso." });
})

app.listen(3333);

