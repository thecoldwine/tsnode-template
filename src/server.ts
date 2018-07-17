import * as express from "express";
import { handler as defaultHandler } from "./handlers/default";

const app: express.Application = express();
const port: number = parseInt(process.env.PORT || "3000", 10);

app.get("/", defaultHandler);

app.listen(port, () => {
    console.log(`Listening at http://0.0.0.0:${port}/`);
});
