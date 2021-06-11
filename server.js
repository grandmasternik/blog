// Dependencies
const express = require('express');
const port = process.env.PORT || 3000;

// Initialize Express
const app = express();

// Home Route
app.get("/", (req, res) => res.render('index.ejs'));

// Tells express to listen
app.listen(port, () => {
    console.log(`listening ${port}`);
});