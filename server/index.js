const express = require("express");
const ctrl = require('./ctrl/controller')

const app = express();

app.use(express.json());

const SERVER_PORT = 4000;

//endpoints
// app.get('/api/pokemon', ctrl.getAllPokemon)
app.get('/api/pokemon/:name/', ctrl.getPokemonByName)
// app.get('/api/getpokemon/:id', ctrl.getPokemonByID)
// app.post('/api/example/sendingData/:param', ctrl.sendingDataExample)

app.listen(SERVER_PORT, () =>
  console.log(`Server running on port ${SERVER_PORT}`)
);
