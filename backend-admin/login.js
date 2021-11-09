// ici, on se connecte à la base de données. Ainsi, on pourra utiliser
// db (l'équivalent de PDO) pour réaliser les requêtes mySQL.
const config = require('./config');
const db = require('./mysqlConnect');
const jwt = require('jsonwebtoken');
const configjwt = require('./config.json');
const { sendError, sendMessage } = require('./message');

async function login(req, res) {
  if (!req.body.username || !req.body.password) {
    return sendError(res, 'Invalid Email/Password');
  }

  let query = `SELECT * FROM ${config.mysqlAdmin}
  WHERE username = '${req.body.username}' 
  AND password = '${req.body.password}'`;

  db.query(query, (err, result) => {
    if (err) throw err;

    if (result.length > 0) {
      const token = jwt.sign(
        {
          id: result[0].id,
          username: result[0].username,
        },
        configjwt.secret,
        { expiresIn: '3 hours' }
      );

      return sendMessage(res, token);
    } else {
      return sendError(res, 'Auth Fail.');
    }
  });
}
module.exports = login;
