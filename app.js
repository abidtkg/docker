const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.status(200).json({message: 'Hello, I Live IN Docker Container'});
});

app.listen(3000);