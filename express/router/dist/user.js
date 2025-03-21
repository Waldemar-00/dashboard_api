import express from 'express';
import { userRouter } from './router.js';
const server = express();
server.use('/', userRouter);
const log = console.log;
server.use((error, _req, res, _next) => {
    log(error.message);
    res.status(500).send(error.message);
});
server.listen(8000, () => console.log('listening on: 8000'));
