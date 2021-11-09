// ici, on se connecte à la base de données. Ainsi, on pourra utiliser
// db (l'équivalent de PDO) pour réaliser les requêtes mySQL.
const config = require('../config');
const db = require('../mysqlConnect');

// chaque requête correspond à une fonction qui renverra ce que l'on appelle
// une Promise (promesse). Une promesse est un objet qui contient une
// fonction (dont on sait qu'elle sera exécutée dans le futur). La promesse
// est renvoyée avant que la fonction ne soit exécutée (fonctionnement donc
// asynchrone). Quand la fonction a été exécutée, la callback appelle la
// fonction resolve qui indique à la promesse qu'elle peut renvoyer la
// réponse en question.

function addRestaurant(req) {
  const query = `INSERT INTO Restaurant (nom, adresse, codePostal, specialite, latitude, longitude)
  VALUES ("${req.body.nom}", "${req.body.adresse}", ${req.body.cp}, "${req.body.specialite}", ${req.body.latitude}, ${req.body.longitude})
  `;

  return new Promise((resolve, reject) => {
    db.query(query, (err, rows) => {
      if (err) return reject(err);
      resolve(rows);
    });
  });
}
module.exports.addRestaurant = addRestaurant;

function addEvol(id) {
  const query = `INSERT INTO Evolution (idRestaurant, nbAvis, moyenne)
  VALUES (${id}, 1, 3)`;

  return new Promise((resolve, reject) => {
    db.query(query, (err, rows) => {
      if (err) return reject(err);
      resolve(rows);
    });
  });
}
module.exports.addEvol = addEvol;

function removeResto(id) {
  const query = `DELETE FROM Restaurant WHERE idRestaurant = ${id}`;

  return new Promise((resolve, reject) => {
    db.query(query, (err, rows) => {
      if (err) return reject(err);
      resolve(rows);
    });
  });
}
module.exports.removeResto = removeResto;

function removeEvol(id) {
  const query = `DELETE FROM Evolution WHERE idRestaurant = ${id}`;

  return new Promise((resolve, reject) => {
    db.query(query, (err, rows) => {
      if (err) return reject(err);
      resolve(rows);
    });
  });
}
module.exports.removeEvol = removeEvol;

function removeNote(id) {
  const query = `DELETE FROM Note WHERE idRestaurant = ${id}`;

  return new Promise((resolve, reject) => {
    db.query(query, (err, rows) => {
      if (err) return reject(err);
      resolve(rows);
    });
  });
}
module.exports.removeNote = removeNote;
