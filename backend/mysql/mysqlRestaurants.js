// ici, on se connecte à la base de données. Ainsi, on pourra utiliser
// db (l'équivalent de PDO) pour réaliser les requêtes mySQL.
const config = require('../config');
const db = require ('../mysqlConnect');


// chaque requête correspond à une fonction qui renverra ce que l'on appelle
// une Promise (promesse). Une promesse est un objet qui contient une
// fonction (dont on sait qu'elle sera exécutée dans le futur). La promesse
// est renvoyée avant que la fonction ne soit exécutée (fonctionnement donc
// asynchrone). Quand la fonction a été exécutée, la callback appelle la
// fonction resolve qui indique à la promesse qu'elle peut renvoyer la
// réponse en question.




//La fonction utilisée dans restaurants
function getRestaurants() {
    const query = `
        SELECT ${config.mysqlEvolution}.idRestaurant AS idRestaurant, 
        ${config.mysqlRestaurant}.nom AS nom, 
        ${config.mysqlRestaurant}.adresse, codePostal ,${config.mysqlRestaurant}.specialite, 
        ROUND(SUM((${config.mysqlEvolution}.moyenne)*nbAvis)/SUM(nbAvis),2) AS moyenne
        FROM ${config.mysqlRestaurant} 
        INNER JOIN ${config.mysqlEvolution}
        WHERE ${config.mysqlRestaurant}.idRestaurant = ${config.mysqlEvolution}.idRestaurant
        GROUP BY ${config.mysqlEvolution}.idRestaurant
        ORDER BY moyenne DESC`;

    return new Promise((resolve, reject) => {
        db.query(query,(err, rows) => {
            if (err) return reject(err);
            resolve(rows);
        });
    });
}
module.exports.getRestaurants = getRestaurants; // on exporte la fonction
