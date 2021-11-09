// les queries dans la base de données.
const queries = require('./mysql/mysqlMap');

const { sendError, sendMessage } = require('./message');

async function mapRestaurant(req, res) {
  const coord = req.body.coord;
  const longitude = coord.longitude;
  const latitude = coord.latitude;
  const restaurant = await queries.getRestaurantProche(longitude, latitude);

  sendMessage(res, restaurant);
}
module.exports = mapRestaurant;
