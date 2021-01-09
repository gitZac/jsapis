const express = require('express');
const app = express();

app.listen(3000, () => console.log('Listening at 3000') );
app.use(express.static('public'));
app.use(express.json({limit: '1mb'}));

app.post('/api', (request, response) => {
    console.log('REQUEST RECEIVED with the client data below: ');
    //Log the request received from the client to the console.
    console.log(request.body);

    //Store the body of the request object in a variable.
    const data = request.body;
    
    //Sends a json object RESPONSE that we created back to client with the lat lng data from the REQUEST.
    response.json({
        status: 'Success!',
        latitude: data.lat,
        longitude: data.lng
    });
}); 