const nodemailer = require('nodemailer');
const {sendError, sendMessage} = require ("./message");

async function sendMail (req,res) {
    const lastName = req.body.nom;
    const firstName = req.body.prenom;
    const mail = req.body.email;
    const comment = req.body.commentaire;

    const smtpTransport = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: 'marseilleatpolytech@gmail.com',
            pass: 'polytech',
        },
    });

    const data = {
        from:       'marseilleatpolytech@gmail.com',
        to:         'marseilleatpolytech@gmail.com',
        subject:    'Nous contacter: ' + mail,
        html:
             `<br />
              <b> Nom :  </b> ${lastName}
              <br />
              <b> Prénom :  </b> ${firstName}
              <br />
              <b> E-mail :  </b> ${mail}
              <br />
              <br />
              <br />
              <b> Commentaire: </b>
              <div>${comment }</div>
              <br />
              <br />
             `,

    }
    console.log(data);
    smtpTransport.sendMail(data,function (error,response) {
        if (error) {
            console.log(error);
        } else {
            console.log('email sent successfully');
            sendMessage(res, 'email sent successfully' );
        }
    })


}


module.exports = sendMail;