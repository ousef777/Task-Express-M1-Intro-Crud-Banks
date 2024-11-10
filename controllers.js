const accounts = require("./accounts");

exports.accountsList = (req, res) => {
    res.status(200).json(accounts);
};

exports.getAccount = (req, res) => {
    let account = accounts.find(acc => acc.username === req.params.username);
    if (req.query.currency == "usd") account.funds *= 3;
    res.status(200).json(account);
};

exports.add = (req, res) => {
    const username = req.body.username;
    const newAccount = {
        id: (accounts.at(-1).id + 1),
        username: username,
        funds: 0
    };
    accounts.push(newAccount);
    return res.status(200).json(newAccount);
};

exports.remove = (req, res) => {
    const { accountId } = req.params;
    if (accounts.find(acc => acc.id == +accountId) == undefined) res.status(404).send("Not Found");
    else {
        const del = accounts.filter(acc => acc.id != +accountId);
        res.status(200).json(del);
    }
};

exports.update = (req, res) => {
    const { accountId } = req.params;
    if (accounts.find(acc => acc.id == +accountId) == undefined) res.status(404).send("Not Found");
    else {
        const newAccount = {
            id: accountId,
            username: req.body.username,
            funds: req.body.funds
        };
        accounts.splice(accounts.findIndex(acc => acc.id == +accountId), 1, newAccount);
        return res.status(200).json(accounts);
    }
};