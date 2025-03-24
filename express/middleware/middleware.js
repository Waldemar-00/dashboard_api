"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const express_1 = tslib_1.__importDefault(require("express"));
const server = (0, express_1.default)();
const log = console.log;
server.use((_req, _res, next) => {
    log('Middleware started at:', Date.now());
    next();
});
server.get('/middleware', (_req, res) => {
    res.send('<h1>Hello Middleware!</h1>');
});
server.listen(8000, () => log('Listen on port 8000'));
