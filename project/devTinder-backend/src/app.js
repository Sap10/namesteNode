const express = require('express');

const app = express();

/**
 * If we use the app.use to create http methode, as we didn't define here the methods as like GET, POST, PUT , DELETE etc. etc.
 * Then those http will work on all the http methods.
 */


app.use('/hello', (req, res) => {
    res.send("hello !!!");
});

// app.use('/test',(req, res) => {
//     res.send("response from server");
// });

// app.use('/', (req, res) => {
//     res.send('Saptarshi Tah');
// });

/**
 * Those following methods are GET, POST, PUT, PATCH, DELETE http methods of /user route 
 */

app.get('/user', (req, res) => {
    res.send({userName:'saptarshi', password: '123456'});
});

app.listen(7777, () => console.log('server running at port 7777 ...'));