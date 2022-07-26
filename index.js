const express = require('express');
const app = express();
const port = 8000;

//use express router
app.use('/', require('./routes'));

//set up the view engines
app.set('view engine', 'views');
app.set('views', './views');


app.listen(port, function(err){
    if (err){
        console.log(`Error in running the server: ${err}`);
    }

    console.log(`Server is running on port: ${port}`);
})