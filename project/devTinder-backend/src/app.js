const express = require('express');

const app = express();

app.use('/hello', (req, res) => {
    res.send("hello !!!");
});

app.use('/test',(req, res) => {
    res.send("response from server");
});

app.listen(3000, () => {
    console.log('server running at port 3000 ...');
});