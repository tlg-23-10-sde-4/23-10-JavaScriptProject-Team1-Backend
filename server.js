const express = require("express");
<<<<<<< HEAD
const sequelize = require("./connection/connection.js");
const cors = require("cors");
const routes = require("./controller");
const corsoption = {
  origin: "http://localhost:3000",
};
=======
const sequelize = require('./connection/connection.js');
const cors = require("cors");
const routes = require("./controller")
const corsoption = {
    origin: "http://localhost:3000"
}
>>>>>>> d1ae341084aa4b73b2345e577e44349876c5525a

const PORT = process.env.PORT || 3001;

const app = express();

app.use(cors(corsoption));

app.use(express.json());

app.use(routes);

const startServer = async () => {
<<<<<<< HEAD
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
=======
    try {
        // Ensure the database connection is established before starting the server
        await sequelize.authenticate();
        console.log('Connection to the database has been established successfully.');

        // await sequelize.sync();

        app.listen(PORT, () => {
            console.log(`Now listening on port: ${PORT}`);
        });
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
};

// Call the function to start the server
startServer();
>>>>>>> d1ae341084aa4b73b2345e577e44349876c5525a
