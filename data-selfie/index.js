const express = require('express');
const app = express();
const Datastore = require('nedb')

app.listen(3000, () => console.log('Listening at 3000') );
app.use(express.static('public'));
app.use(express.json({limit: '1mb'}));

const database = new Datastore('database.db');
database.loadDatabase();

app.post('/api', (request, response) => {
    console.log('REQUEST RECEIVED with the client data below: ');
    //Log the request received from the client to the console.
    console.log(request.body);
    //Store the body of the request object in a variable.
    const data = request.body;
    const timestamp = Date.now();
    data.timestamp = timestamp;

    const confirmation = 'Your Request has been received!';
    data.confirmation = confirmation;

    //Insert client data into the database.
    database.insert(data);
    
    //Sends a json object RESPONSE that we created back to client with the lat lng data from the REQUEST.
    response.json(data);
});