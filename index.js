const express = require('express');
const app = express();


function logger(req, res, next) {
    console.log('i am logger');
    next();
}

//MIDDELEWARE ADD
app.use(logger);

app.listen(3000, function() {
    console.log('SERVER IS RUNNING ')
})

