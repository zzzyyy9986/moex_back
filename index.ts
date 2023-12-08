import * as express from "express";
require("dotenv").config();

const app = express();
const port = 8080;

app.get('/', (req: express.Request, res: express.Response) => {
    res.send('Express + TypeScript Server');
});

app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});