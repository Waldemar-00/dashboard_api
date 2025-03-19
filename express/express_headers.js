import express from 'express'

const server = express()
const log = console.log

server.get( '/home', ( req, res ) =>
{
    res.setHeader( 'Content-Type', 'text/plain' )
    res.links( {
        canonical: '/home',
        prev: '/home',
        next: '/home/flat',
    } )
    res.location( '/home/flat' ) //* redirect to new resource URL
    res.append( 'Warning', 'code' )
    //* res.type( 'application/json' ) - redefines setHeader
    res.send('This is plain text!!!')
})
server.listen( 8000, () => log( 'listening on port: 8000' ) )
