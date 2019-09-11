const express = require('express'); // import(find) express file
const app = express(); // make express application

const PORT = 4000;

function handleListening(){
    console.log(`Listening on : https://localhost:${PORT}`);
}

app.listen(PORT, handleListening);