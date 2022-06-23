import express from 'express';
import {evalFilesInDir} from "./src/jsfiles/index.mjs";

const app = express();
const port = 3000;

app.get('/dir_info', (req, res) => {

    res.send(evalFilesInDir(req.query.path));

});


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
