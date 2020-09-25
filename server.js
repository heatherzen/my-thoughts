const express = require('express');
const mongoose = require('mongoose');


const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


mongoose.set('debug', true);

app.listen(PORT, () => {
    console.log(`App is listening on port ${PORT}!`);
  });