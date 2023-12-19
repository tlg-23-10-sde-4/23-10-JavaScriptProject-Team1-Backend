const express = require("express");

const cors = require("cors");

const corsoption = {
    origin: "http://localhost:3000"
}

const routes = require("./controller")

const PORT = process.env.PORT || 3001;

const app = express();

app.use(cors(corsoption))

app.use(express.json());

app.use(routes);

app.listen(PORT, async () => {
    console.log(`Now listening on port: ${PORT}`);
}); 

