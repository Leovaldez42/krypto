require('@nomiclabs/hardhat-waffle');
require('dotenv').config({path:__dirname+'/.env'})

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: process.env.URL,
      accounts: [process.env.ACCOUNT]
    }
  }
}