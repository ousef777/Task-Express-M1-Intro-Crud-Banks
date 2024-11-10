const express = require("express");
const router = express.Router();

const { accountsList, getAccount, add, remove, update } = require("./controllers");

router.get('/accounts', accountsList);
router.get('/accounts/:username', getAccount);

router.post('/accounts', add);

router.delete('/accounts/:accountId', remove);

router.put('/accounts/:accountId', update);

module.exports = router;