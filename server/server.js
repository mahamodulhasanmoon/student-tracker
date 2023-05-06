const app = require('./app/app');
require('colors')
require('dotenv').config();

const port = process.env.PORT || 8000

app.listen(port, () => {
    console.log(`App is running on port ${port}`.bgMagenta.bold);
  });