const express = require('express');
const app = express();

app.get('/names', (req, res) => {
    res.send("Doroth");
})

app.listen(5555, () =>{
    console.log("Server is running on port 5555.");

})