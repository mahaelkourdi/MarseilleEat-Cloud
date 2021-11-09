// les queries dans la base de données.
const queries = require('./mysql/mysqlAddAvis');

const {sendError, sendMessage} = require ("./message");

async function addAvis (req,res) {
    const id = req.params.id;

    const nom = req.body.nom;
    const commentaire = req.body.commentaire;
    const cuisine = req.body.cuisine;
    const rapport = req.body.rapport;
    const service = req.body.service;

    const avis = await queries.addAvis(nom,commentaire);
    //Recupérer l'idAvis du dernier inseré
    const idAvis = avis.insertId;

    //ajouter la note dans la table Note
    const note = await queries.addNote(id,idAvis, cuisine, rapport, service);

    //ajouter la note dans la table Evolution
    const moyenne = (cuisine+rapport+service)/3 ;
    const evol = await queries.addEvol(id, moyenne) ;

    sendMessage(res, 'OK');
}
module.exports = addAvis;