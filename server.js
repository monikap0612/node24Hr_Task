const express = require('express')

const app = express()
const port = 3000

// Parsing middleware
// Parse application/x-www-form-urlencoded
// app.use(bodyParser.urlencoded({ extended: false })); // Remove 
app.use(express.urlencoded({extended: true})); // New

// Parse application/json
// app.use(bodyParser.json()); // Remove
app.use(express.json()); 


require("./app/routes/app.routes")(app);

app.listen(port, () => console.log(`Example app listening on port ${port}!`))