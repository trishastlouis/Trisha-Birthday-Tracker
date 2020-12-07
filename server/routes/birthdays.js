const router = require('express').Router(),
  { createUser, loginUser } = require('../../models/birthdays');
router.post('/', createUser);
router.post('/login', loginUser);
module.exports = router;
