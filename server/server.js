import express from "express";
import morgan from "morgan";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import router from "./routes";

// Connect to MongoDB
mongoose.connect("mongodb://localhost/survey_app", {
  useMongoClient: true,
});

// Initialize http server
const app = express();

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

// Logger that outputs all requests into the console
app.use(morgan("combined"));
// Use v1 as prefix for all API endpoints
app.use("/v1", router);

const server = app.listen(8080, () => {
  const { address, port } = server.address();
  console.info(`Listening at http://${address}:${port}`);
});
