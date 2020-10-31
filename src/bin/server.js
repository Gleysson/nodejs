const app = require('../app');
const dotenv = require('dotenv-safe');

dotenv.config();
const port = process.env.APP_PORT;

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})