import express from "express";
import bodyParser from "body-parser";

import usersRoutes from "./routes/users.js";

const app = express();
const PORT = 5000;

app.use(bodyParser.json());

app.use("/", usersRoutes);
app.get("/", (req, res) => res.send("Welcome to crud-opearation-custom-api !"));
app.all("*", (req, res) =>res.send("You've tried reaching a route that doesn't exist."));

app.listen(PORT, () =>console.log(`Server is up and running at port: http://localhost:${PORT} !`));