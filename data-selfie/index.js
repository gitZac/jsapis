const express = require('express');
const app = express();

app.listen(3030, () => console.log('Listening at 3030') );
app.use(express.static('public'));