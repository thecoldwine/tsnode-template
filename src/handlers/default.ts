import * as express from "express";

export const handler: express.RequestHandler = (req: express.Request, resp: express.Response) => {
    resp.send("Hello, world7");
}