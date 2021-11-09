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


//La fonction utilisée dans détails restaurant pour avoir les information du restaurant idRestauarant
function getRestaurant(id) {
    const query = `
        SELECT T.idRestaurant, nom, adresse, codePostal, specialite,
        latitude, longitude, cuisine, rapport, service, SUM(nbAvis), ROUND(SUM((${config.mysqlEvolution}.moyenne)*nbAvis)/SUM(nbAvis),2) AS moyenne 
        FROM(
        SELECT ${config.mysqlNote}.idRestaurant AS idRestaurant, 
        ${config.mysqlRestaurant}.nom AS nom, 
        ${config.mysqlRestaurant}.adresse, codePostal ,${config.mysqlRestaurant}.specialite, 
        ${config.mysqlRestaurant}.latitude,
        ${config.mysqlRestaurant}.longitude,
        ROUND(AVG(cuisine),2) AS cuisine,
        ROUND(AVG(rapport),2) AS rapport,
        ROUND(AVG(service),2) AS service
        FROM ${config.mysqlRestaurant} 
        INNER JOIN ${config.mysqlNote}
        ON ${config.mysqlRestaurant}.idRestaurant = ${config.mysqlNote}.idRestaurant
        WHERE ${config.mysqlNote}.idRestaurant = ?) as T
        INNER JOIN ${config.mysqlEvolution}
        ON T.idRestaurant = ${config.mysqlEvolution}.idRestaurant
        GROUP BY ${config.mysqlEvolution}.idRestaurant`;

    const data = [id];
    return new Promise((resolve, reject) => {
        db.query(query,data,(err, rows) => {
            if (err) return reject(err);
            resolve(rows);
        });
    });
}
module.exports.getRestaurant = getRestaurant; // on exporte la fonction

//La fonction utilisée dans détails restaurant pour avoir les avis du restaurant idRestauarant
function getAvis(id) {
    const query = `
        SELECT ${config.mysqlNote}.idAvis AS idAvis, 
        ${config.mysqlNote}.idNote AS idNote, 
        ROUND(AVG((cuisine+rapport+service)/3),2) AS moyenne,
        cuisine,
        rapport,
        service,
        date,
        user,
        avis
        FROM ${config.mysqlAvis} 
        INNER JOIN ${config.mysqlNote}
        WHERE ${config.mysqlAvis}.idAvis = ${config.mysqlNote}.idAvis
        AND ${config.mysqlNote}.idRestaurant = ?
        GROUP BY ${config.mysqlNote}.idNote
        ORDER BY date DESC`;

    const data = [id];
    return new Promise((resolve, reject) => {
        db.query(query,data,(err, rows) => {
            if (err) return reject(err);
            resolve(rows);
        });
    });
}
module.exports.getAvis = getAvis; // on exporte la fonction


//La fonction est utilisé pour getRestaurant.js pour avoir l'evolution d'un restaurant
function getEvol(id) {
    const query = `
        SELECT * FROM ${config.mysqlEvolution}
        WHERE idRestaurant = ?
        ORDER BY date DESC`;

    const data = [
        [id]
    ];

    return new Promise((resolve, reject) => {
        db.query(query, [data], (err, rows) => {
            if (err) return reject(err);
            resolve(rows);
        });
    });

}

module.exports.getEvol = getEvol; // on exporte la fonction

