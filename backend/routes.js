const express = require('express');
const controllers=require('./controllers');
const router = express.Router();

router.use((req, res, next) => {
  console.log('router is working');
  next();
});

router.get('/mail/user/:email',controllers.getUser)
router.post('/mail/send',controllers.sendMail);
router.get('/mail/drafts/:email', controllers.getDrafts);
router.get('/mail/read/:messageId', controllers.readMail);

module.exports = router;