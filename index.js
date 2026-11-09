const express = require('express');
const app = express();
const port = 3030;
const mongoose = require('mongoose');

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.get('/about', (req, res) => {
  res.send('This is the about page.');
});

app.get('/contact', (req, res) => {
  res.send('This is the contact page.');
});

app.get('/home', (req, res) => {
    res.send('Welcome to the home page.');
});

app.get('/services', (req, res) => {
    res.send('These are our services.');
});






app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});




mongoose.connect("mongodb+srv://azizurrehman:azizurrehman0@azizurrehmanweb.afdzqay.mongodb.net/")
.then(() => {
    console.log("Database connected successfully");
})
.catch((error) => {
    console.error("Database not connected");
    console.error(error);
});