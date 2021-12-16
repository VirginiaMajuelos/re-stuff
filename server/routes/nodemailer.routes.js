const router = require("express").Router();
const transporter = require("../config/nodemailer.config.js");
const Request = require("../models/Request.model");

router.post("/", (req, res, next) => {
  //   let { email, subject, message } = req.body;
  let { idRequest, isAccept, idProduct } = req.body;

  console.log(isAccept, "IS ACCEPTED???");

  Request.findById(idRequest)
    .populate("requestOwner")
    .then((request) => {
      const email = request.requestOwner.email;
      const subject = "Rent product from Re-Stuff";

      const message =
        isAccept === "ACCEPTED"
          ? "Your rent request has been accept. The productOwner contact you for email or whatsapp. A cool option is that you can write a review when you finish rent. Enjoy it!"
          : "Sorry! Your rent request has benn deny. The productOwner can't accept your rent to that day. Try it with other date or other products. See you!";

      console.log("el mensaje es", message);

      transporter.sendMail({
        from: '"Re-stuff" <restuff2021@gmail.com>',
        to: `${email}`,
        subject: `${subject}`,
        text: `${message}`,
      });

      res.status(200).json(request);
    })
    .catch((error) =>
      res.json("message", {
        errorMessage: "El correo no ha podido ser enviado",
      })
    );
});

module.exports = router;
