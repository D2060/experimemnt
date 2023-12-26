const express = require('express');
const fs = require('fs');

const home = fs.readFileSync("./NODE/app/index.html", 'utf8');
const about = fs.readFileSync("./NODE/app/about.html", 'utf8');
const services = fs.readFileSync("./NODE/app/services.html", 'utf8');
const contact = fs.readFileSync("./NODE/app/contact.html", 'utf8');

const app = express();

app.get('/', (req, res) => {
    res.status(200).header('Content-Type', 'text/html').send(home);
});

app.get('/about', (req, res) => {
    res.status(200).header('Content-Type', 'text/html').send(about);
});

app.get('/services', (req, res) => {
    res.status(200).header('Content-Type', 'text/html').send(services);
});

app.get('/contact', (req, res) => {
    res.status(200).header('Content-Type', 'text/html').send(contact);
});

app.listen(4000, '127.0.0.1', () => {
    console.log("Express is started");
});
