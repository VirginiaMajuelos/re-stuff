const router = require("express").Router()
const transporter = requiere ('../config/nodemailer.config.js');
const Product = require("../models/Product.model")

router.post('/send-email', (req, res, next) => {
//   let { email, subject, message } = req.body;
  let { idRequest, isAccepted } = req.body;

    Request.findById(idRequest)
     .populate('requestOwner')
     .then(product => {})

    const email = this.product.owner.email;
    const subject = "Rent product from Re-Stuff";
      
      if(isAccepted === 'ACCEPTED'){
            const message =
              "Your rent request has been accept. The productOwner contact you for email or whatsapp. A cool option is that you can write a review when you finish rent. Enjoy it!";
        } else {
            const message ="Sorry! Your rent request has benn deny. The productOwner can't accept your rent to that day. Try it with other date or other products. See you!";
        };

  transporter.sendMail({
    from: '"Re-stuff" <restuff2021@gmail.com>',
    to: `${email}`,
    subject: `${subject}`,
    text: `${message}`,
  })
    .then(info => res.render('message', { email, subject, message }))
    .catch(error => res.render('message', { errorMessage: "El correo no ha podido ser enviado" }))

});

module.exports = router