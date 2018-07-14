const dbConfig = require('./dbConfig')

module.exports = {
  mongoURI: `mongodb://${dbConfig.user}:${
    dbConfig.password
  }@ds239071.mlab.com:39071/networkdating`
}
