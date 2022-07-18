const express = require('express');
const app = express();
const data = require('./data/characters')
const { router } = require('./routes');

app.use(express.urlencoded({extended:false}));
app.use(express.json());

app.use("/", router);




const port = process.env.port || 80;
app.listen(port, () => console.log(`El cielo Resplancede a mi Alrededor ♫♫♫ ${port}...`));