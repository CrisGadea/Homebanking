const path = require('path');

const cors = require('cors');

require('dotenv').config({ path: path.resolve(__dirname, '../.env') });

const express = require('express')

const mongoose = require('mongoose');

const app = express()

const port = 3000

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors())

app.get('/clients', (req, res) => {

  res.send('Hello World!')

})

app.listen(port, () => {

  console.log(`Example app listening on port ${port}`)

})

app.use('/api/v1',  require('./routers/routers'));

mongoose.connect(process.env.MONGODB, {useNewUrlParser: true, useUnifiedTopology: true})

  .then(() => console.log ('Conexión a MongoDB establecida'))

  .catch(err => console.log (err))