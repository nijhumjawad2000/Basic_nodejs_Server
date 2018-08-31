//creating the express object to be used within the file
const express = require('express');
//The path object helps save and handle the server location
const path = require('path');
const routes = require('./routes');
//Run the express main function and save it as the app object
const app = express();
//App.set allows me to set settings pertaing to this particular server instance
app.set('view engine', 'ejs');
//Tell the server instance to serve the public folder to the client
app.use(express.static(path.join(__dirname, 'public')));
//Create home page route
app.get('/', routes.home);
//create test route to see how routing works
app.get('/test', routes.test);

//Set up a listener to listen for which port we are going to use
app.listen(3000, ()=>console.log('app listening on port 3000!'));