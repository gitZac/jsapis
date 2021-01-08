
if ('geolocation' in navigator){
    console.log('Geolocation available');
    navigator.geolocation.getCurrentPosition(position => {
        console.log(position);
      });
} else {
    console.log('Not abalskskdfjlj');
}