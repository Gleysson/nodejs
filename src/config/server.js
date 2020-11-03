const dotenv = require('dotenv-safe');
dotenv.config();

module.exports = {
    PORT: process.env.PORT || 3000
}