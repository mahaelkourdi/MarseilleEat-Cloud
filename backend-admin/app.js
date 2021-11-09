// on crée le serveur web sur le port 3001
const express = require('express');
const app = express();
const port = process.env.PORT || 3001;

// body-parser permet de récupérer facilement les données passées en POST:
// l'équivalent de $_POST['toto'] est alors req.body.post. Comme, à terme,
// votre application Angular enverra ses données au format JSON, on demande
// au body parser de parser uniquement ce format.
const bodyParser = require('body-parser');
app.use(bodyParser.json());

// permet d'éviter le problème de CORS que l'on avait déjà vu
const cors = require('cors');
app.use(cors({ origin: 'https://localhost:4200', credentials: true }));

// ici, on met en place les routes qui seront servies par le serveur web :
// chaque route correspond à un fichier que l'on charge via un require. Ce
// fichier exporte juste une fonction, que l'on appelle quand l'utilisateur
// demande à accéder à la route.
const login = require('./login');
const addresto = require('./addResto');
const deleteresto = require('./deleteResto');

app.post('/login', (req, res) => {
  login(req, res);
});
app.post('/addresto', (req, res) => {
  addresto(req, res);
});
app.delete('/removeresto/:id', (req, res) => {
  deleteresto(req, res);
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
