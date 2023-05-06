const app = require('./app/app');
const connectDB = require('./db/db')
require('colors')
require('dotenv').config();
const port = process.env.PORT || 8000

// connect database 
connectDB('mongodb://127.0.0.1:27017/student-tracker')
.then(()=>{
  console.log('database connection established'.cyan.bold)
  app.listen(port, () => {
    console.log(`App is running on port ${port}`.magenta.bold);
  });
})
.catch(err=> console.log(err.message))



