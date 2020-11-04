const app = require('../app');

const port = app.src.config.server.PORT

app.listen(port, () => {
  console.log(`App is Running on Port :${port}`)
})