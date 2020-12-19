import "reflect-metadata";
import * as dotenv from "dotenv";
import { createConnection } from "typeorm";
import { app } from "./app";

const result = dotenv.config();

if (result.error) {
  throw result.error;
}

//Connects to the Database -> then starts the express
createConnection()
  .then(async () => {
    // Create a new express application instance
    app.listen(3000, () => {
      /* eslint-disable no-console */
      console.log("Server started on port 3000!");
    });
  })
  .catch((error) => console.log(error));
