import * as express from "express";
require("dotenv").config();

const app = express();
const port = 8080;
const pathToFront = __dirname + "/build/";
app.use(express.static(pathToFront));



app.get('/', (req: express.Request, res: express.Response) => {
    res.sendFile(pathToFront + "index.html");
    res.send('Express + TypeScript Server');
});

app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});