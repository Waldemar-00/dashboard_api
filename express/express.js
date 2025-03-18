import express from 'express'
const log = console.log
const server = express()
const host = '127.0.0.1'
const port = 8000

server.all( '/', function ( _req, _res, next ) //! middleware
{
    //* inner work on server
    log( 'Auth was passed! And CORS!' )
    next() //! TRANSMITS control below to the same route with any method
} )
server.get( '/', ( _req, res ) =>
{
    res.send( 'You are on the Home Page! Method GET' )
} )
server.post( '/', ( _req, _res ) =>
{
    log( 'Method POST' )
} )
server.put( '/', ( _req, _res ) =>
{
    log( 'Method PUT' )
} )
server.get( '/hello/:id?', ( req, res ) =>
{
    if ( req.params.id ) res.send( `Product ID: ${ req.params.id }` )
    else res.send( 'Hello here, Express!' )

} )

server.get( '/categories/:category+', ( req, res ) =>
{
    res.send( `Category from params: ${ req.params['category'] }` )
} )
server.get( '/files/(.*)', ( req, res ) =>
{
    res.send( `Category from params: ${ req.params[0] }` )
} )

server.get('(.*)', ( _req, res ) =>
{
    res.status(404).send( `PAGE NOT FOUND` )
} )

server.listen( port, () => console.log( `Listening on: ${ host }:${ port }` ) )
