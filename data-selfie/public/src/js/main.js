function setup(){
    noCanvas();
    const video = createCapture(VIDEO);

    let lat, lng;
    const button = document.getElementById('submit');

    button.addEventListener('click', async e =>{
        //Loads pixels onto a canvase for BASE64 conversion.
        video.loadPixels();
        //converts to BASE64
        const image64 = video.canvas.toDataURL();
        video.size(320, 240);

    
        //Create an object called options for the POST that we are sending to the server.
        const vegetable = document.getElementById('vegetable').value;
        const data = {lat, lng, vegetable, image64};
        const options = {
            method: 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            // Convert the body of the POST to a JSON string
            body: JSON.stringify(data)
        }
        const response = await fetch('/api', options);
        const json = await response.json();
        console.log(json);
    });
    
    if ('geolocation' in navigator){
        console.log('Geolocation available');
        navigator.geolocation.getCurrentPosition(async position => {
            lat = position.coords.latitude;
            lng = position.coords.longitude;
            document.getElementById('Latitude').textContent = lat;
            document.getElementById('Longitude').textContent = lng;
          });
    } else {
        console.log('Not found');
    }
}
