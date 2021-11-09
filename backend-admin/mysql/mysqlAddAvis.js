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


//La fonction est utilisé pour addAvis.js pour ajouter dans la table Avis
function addAvis(nom,commentaire) {
    //ajouter l'avis dans la table AVis
    const query = `
        INSERT INTO ${config.mysqlAvis} (user, avis)
        VALUES ?`;
    const data = [
        [nom , commentaire]
    ];

    return new Promise((resolve, reject) => {
        db.query(query,[data],(err, rows) => {
            if (err) return reject(err);
            resolve(rows);
        });
    });
}
module.exports.addAvis = addAvis; // on exporte la fonction



//La fonction est utilisé pour addAvis.js pour ajouter dans la table Note
function addNote(id, idAvis, cuisine, rapport, service) {
    //ajouter l'avis dans la table AVis
    const query = `
        INSERT INTO ${config.mysqlNote} 
        (idRestaurant, idAvis,cuisine, rapport, service)
        VALUES ?`;
    const data = [
        [id, idAvis,cuisine, rapport, service]
    ];

    return new Promise((resolve, reject) => {
        db.query(query, [data], (err, rows) => {
            if (err) return reject(err);
            resolve(rows);
        });
    });

}

module.exports.addNote = addNote; // on exporte la fonction


//La fonction est utilisé pour addAvis.js pour ajouter
// dans la table Evolution
function addEvol(id, moyenne) {
    //ajouter l'avis dans la table evolution
    let resultsLength;
//Verfier si la date existe deja
    const query = `
        SELECT * FROM ${config.mysqlEvolution}
        WHERE (idRestaurant = ?) AND
        (date BETWEEN CURDATE() AND DATE_ADD(CURDATE(), INTERVAL 1 DAY))`;

    //const resultsLength = 0 ;
    const queryUserExists = db.query(query,[id],function (error, results, fields) {
        if (error) throw error;
        //si oui faut ajouter 1 au nbAvis et recalculer la moyenne
        if(results.length  > 0){
            const query = `
                UPDATE ${config.mysqlEvolution} 
                SET moyenne = (nbAvis*moyenne + ?)/ (nbAvis+1), 
                nbAvis = nbAvis+1
                WHERE (idRestaurant = ?) AND
                (date BETWEEN CURDATE() AND DATE_ADD(CURDATE(), INTERVAL 1 DAY))`;
            const data = [
                [moyenne,id]
            ];
            return new Promise((resolve, reject) => {
                db.query(query, [data], (err, rows) => {
                    if (err) return reject(err);
                    resolve(rows);
                });
            });

            //sinon creer une ligne
        }else{
            const query = `
                INSERT INTO ${config.mysqlEvolution} 
                (nbAvis, moyenne, idRestaurant)
                VALUES ?`;
            const data = [
                [1, moyenne, id]
            ];
            return new Promise((resolve, reject) => {
                db.query(query, [data], (err, rows) => {
                    if (err) return reject(err);
                    resolve(rows);
                });
            });
        }
    });

}
module.exports.addEvol = addEvol; // on exporte la fonction

