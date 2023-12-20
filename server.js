const express = require("express");

const sequelize = require("./connection/connection.js");
const cors = require("cors");
const routes = require("./controller");
const corsoption = {
  origin: "http://localhost:3000",
};

const PORT = process.env.PORT || 3001;

const app = express();

app.use(cors(corsoption));

app.use(express.json());

app.use(routes);

const startServer = async () => {
  try {
    // Ensure the database connection is established before starting the server
    await sequelize.authenticate();
    console.log("Connection to the database has been established successfully.");

    // await sequelize.sync();

    app.listen(PORT, () => {
      console.log(`Now listening on port: ${PORT}`);
    });
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

// Call the function to start the server
startServer();
