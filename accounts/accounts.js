const { v4:uuidv4 } = require('uuid');

const accounts = [
  {
    id: uuidv4(),
    username: 'Omar',
    funds: 30,
  },
  {
    id: uuidv4(),
    username: 'Zainab',
    funds: 0,
  },
  {
    id: uuidv4(),
    username: 'Salwa',
    funds: 100,
  },
];

module.exports = accounts;
