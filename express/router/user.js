"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const express_1 = tslib_1.__importDefault(require("express"));
const router_js_1 = require("./router.js");
const server = (0, express_1.default)();
server.use('/', router_js_1.userRouter);
const log = console.log;
server.use((error, _req, res, _next) => {
    log(error.message);
    res.status(500).send(error.message);
});
server.listen(8000, () => console.log('listening on: 8000'));
