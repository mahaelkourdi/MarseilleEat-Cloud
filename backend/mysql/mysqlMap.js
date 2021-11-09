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

function getRestaurantProche(lat, lng) {
  const query = `
            SELECT A.idRestaurant, nom, adresse, codePostal, specialite, proximite, longitude, latitude,
            ROUND(SUM((${config.mysqlEvolution}.moyenne)*nbAvis)/SUM(nbAvis),2) AS moyenne
            FROM
            (SELECT *,
            ROUND(6378137 * 2 * ATAN2(SQRT(SIN((RADIANS(latitude) - rla1) / 2) * SIN((RADIANS(latitude) - rla1) / 2) + COS(rla1) * COS(RADIANS(latitude)) * SIN((RADIANS(longitude) - rlo1) / 2) * SIN((RADIANS(longitude) - rlo1) / 2)), SQRT(1 - (SIN((RADIANS(latitude) - rla1) / 2) * SIN((RADIANS(latitude) - rla1) / 2) + COS(rla1) * COS(RADIANS(latitude)) * SIN((RADIANS(longitude) - rlo1) / 2) * SIN((RADIANS(longitude) - rlo1) / 2)))),2)
            AS proximite
            FROM (
            SELECT * , RADIANS(?) AS rlo1, RADIANS(?) AS rla1
              FROM ${config.mysqlRestaurant}) AS T)
            AS A
          INNER JOIN ${config.mysqlEvolution}
          WHERE A.idRestaurant = ${config.mysqlEvolution}.idRestaurant
          AND proximite < 10000
          GROUP BY ${config.mysqlEvolution}.idRestaurant
          ORDER BY proximite ASC
          `;

  return new Promise((resolve, reject) => {
    db.query(query, [lat, lng], (err, rows) => {
      if (err) return reject(err);
      resolve(rows);
    });
  });
}
module.exports.getRestaurantProche = getRestaurantProche; // on exporte la fonction
