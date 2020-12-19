import "reflect-metadata";
import * as express from "express";
import * as bodyParser from "body-parser";
import * as helmet from "helmet";
import * as cors from "cors";
import routes from "./routes";

export const app: express.Application = express();

app.use(cors());
app.use(helmet());
app.use(bodyParser.json());

app.use("/", routes);
