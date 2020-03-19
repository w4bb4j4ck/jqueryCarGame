const express = require('express');
const app = express();
const PORT = 5000;
const bodyParser = require('body-parser');

app.use(express.static('server/public'));
app.use(bodyParser.urlencoded({extended:true}));
app.listen(port, () => {
    console.log('Listening on port', port);  
});