import * as compression from 'compression';
import * as helmet from 'helmet';
import * as express from 'express';
import * as path from "path"
import config from "./config"
import apiRouter from './routes';
import type { Error } from "./utils/types"


const app = express();

app.use(compression());
app.use(helmet());
app.use(express.static('public'));
app.use(express.json());
app.use(apiRouter);
// router dom doesn't clash with api routes
app.get("*", (req, res) => res.sendFile(path.join(__dirname, "../public/index.html")));
//error handling middle-ware from espress
app.use((err: Error, req: express.Request, res: express.Response, next: express.NextFunction)=>{
res.status(err.status || 500)
res.json({
    errors: {
        err: err.message
    }
})
})

const port = process.env.PORT || 3000;
app.listen(config.port, () => console.log(`Server listening on port: ${config.port}`));
