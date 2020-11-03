const app = require('../app');
const config = require('../config/server')

app.listen(config.PORT, () => {
  console.log(`App is Running on Port :${config.PORT}`)
})