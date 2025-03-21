import express from 'express'

const server = express()
const log = console.log
server.use( ( _req, _res, next ) =>
{
    log( 'Middleware started at:', Date.now() )
    next()
} )

server.get( '/middleware', ( _req, res ) =>
{
    res.send( '<h1>Hello Middleware!</h1>')
} )
server.listen( 8000, () => log('Listen on port 8000'))