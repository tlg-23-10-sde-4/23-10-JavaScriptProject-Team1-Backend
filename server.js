const express = require("express");

const routes = require("./controller")

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.json());

app.use(routes);

app.listen(PORT, async () => {
    console.log(`Now listening on port: ${PORT}`);
}); 

