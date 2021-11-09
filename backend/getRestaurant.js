// les queries dans la base de données.
const queries = require('./mysql/mysqlRestaurant');

// ici, on utilise ce que l'on appelle l'object destructuring de
// JavaScript afin de récupérer les fonctions sendError et sendMessage.
// ce sont les équivalents des fonctions du même nom que vous aviez
// utilisées en PHP (voir helper.php). L'intérêt de l'object destructuring
// réside dans le fait que l'on va pouvoir appeler directement les fonctions
// sendError et sendMessage. Si l'on avait écrit :
// const message = require ("./message");
// on aurait dû, par la suite, appeler message.sendError () et
// message.sendMessage ().
const {sendError, sendMessage} = require ("./message");

// ici, pour réaliser séquentiellement plusieurs requêtes mySQL (ce
// qui devra être fait pour répondre à certaines requêtes de votre
// appli Angular, on va utiliser l'opérateur "await "(voir ci-dessous).
// A noter que toutes les fonctions qui utilisent ce mot clef doivent
// être déclarées comme asynchrones via le mot clef async
async function getRestaurant (req,res) {
    // On peut réaliser les requêtes mySQL.
    // Grâce au mot clef "await", celles-ci sont réalisées séquentiellement :
    // même si les requêtes mysql sont asynchrones, await va attendre la
    // réponse de la requête avant de passer à la suite.
    // Précisons ici que ces requêtes n'ont d'autre intérêt que de vous montrer
    // comment réaliser des requêtes séquentielles à la manière de PHP : ici,
    // on aurait pu se contenter d'une seule requête MySQL pour obtenir le
    // même résultat.

    const id = req.params.id;
    const restaurant = await queries.getRestaurant(id);
    //console.log(restaurant[0]["idRestaurant"]);

    const avis = await queries.getAvis(id);
    //console.log(avis);
    const evolution = await queries.getEvol(id) ;
    const resultat = {restaurant,
                    "Avis": avis,
                    "Evolution" : evolution,
                    "pathImage": "./Image/"+restaurant[0]["idRestaurant"]+".png"};

    // on renvoie au format JSON la liste des restaurants
    sendMessage(res, resultat);
}


module.exports = getRestaurant;