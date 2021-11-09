// les queries dans la base de données.
const queries = require('./mysql/mysqlRestaurant');
const queriesAvis = require('./mysql/mysqlAddAvis');

// ici, on utilise ce que l'on appelle l'object destructuring de
// JavaScript afin de récupérer les fonctions sendError et sendMessage.
// ce sont les équivalents des fonctions du même nom que vous aviez
// utilisées en PHP (voir helper.php). L'intérêt de l'object destructuring
// réside dans le fait que l'on va pouvoir appeler directement les fonctions
// sendError et sendMessage. Si l'on avait écrit :
// const message = require ("./message");
// on aurait dû, par la suite, appeler message.sendError () et
// message.sendMessage ().
const { sendError, sendMessage } = require('./message');

// ici, pour réaliser séquentiellement plusieurs requêtes mySQL (ce
// qui devra être fait pour répondre à certaines requêtes de votre
// appli Angular, on va utiliser l'opérateur "await "(voir ci-dessous).
// A noter que toutes les fonctions qui utilisent ce mot clef doivent
// être déclarées comme asynchrones via le mot clef async
async function addRestaurants(req, res) {
  // On peut réaliser les requêtes mySQL.
  // Grâce au mot clef "await", celles-ci sont réalisées séquentiellement :
  // même si les requêtes mysql sont asynchrones, await va attendre la
  // réponse de la requête avant de passer à la suite.
  // Précisons ici que ces requêtes n'ont d'autre intérêt que de vous montrer
  // comment réaliser des requêtes séquentielles à la manière de PHP : ici,
  // on aurait pu se contenter d'une seule requête MySQL pour obtenir le
  // même résultat.

  if (
    req.body.nom &&
    req.body.adresse &&
    req.body.cp &&
    req.body.specialite &&
    req.body.latitude &&
    req.body.longitude
  ) {
    console.log('ok');
  } else {
    return sendError(res);
  }

  const id = await queries.addRestaurant(req);
  await queries.addEvol(id.insertId);

  //const avis = await queriesAvis.addAvis('Pierre', 'Super bon');
  //const idAvis = avis.insertId;
  //ajouter la note dans la table Note
  //const note = await queriesAvis.addNote(id.insertId, idAvis, 3, 3, 3);

  //ajouter la note dans la table Evolution
  //const moyenne = (3 + 3 + 3) / 3;
  //const evol = await queriesAvis.addEvol(id.insertId, moyenne);

  // on renvoie au format JSON la liste des restaurants
  sendMessage(res, id.insertId);
}

module.exports = addRestaurants;
