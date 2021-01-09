if ('geolocation' in navigator){
    console.log('Geolocation available');
    navigator.geolocation.getCurrentPosition(async position => {
        console.log(position.coords.latitude);
        console.log(position.coords.longitude);

        lat = position.coords.latitude;
        lng = position.coords.longitude;
        document.getElementById('Latitude').textContent = lat;
        document.getElementById('Longitude').textContent = lng;
        
        // Store the latitude and longitude in an object that we will send to the server.
        const data = {lat, lng};

        //Create an object called options for the POST that we are sending to the server.
        const options = {
            method: 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            // Convert the body of the POST to a JSON string
            body: JSON.stringify(data)
        }
        //Fetch the RESPONSE from the server and store in a variable called response. 
        const response = await fetch('/api', options);

        //Convert the response to a readable string and save as a variable called json.
        const json = await response.json();

        //Log the json to the chrome console to view the response from the server.
        console.log('Response from the server below: ');
        console.log(json.status);
        console.log(json.latitude);
        console.log(json.longitude);        
      });
} else {
    console.log('Not found');
}