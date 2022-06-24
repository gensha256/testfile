import express from 'express';
import {evalFilesInDir} from "./src/jsfiles/index.mjs";

const app = express();
const port = 3000;

function proceedFiles(dir) {

    try {

        const resultFile = evalFilesInDir(dir);
        return {result: resultFile};
    }
    catch (err) {
        return {error: err};
    }
}


app.get('/dir_info', (req, res) => {

    const {result, error} = proceedFiles(req.query.path);

    if (error) {

        console.log(error);
        res.status(400);
        res.send(error.message);
        return;
    }

    res.send(result);
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
