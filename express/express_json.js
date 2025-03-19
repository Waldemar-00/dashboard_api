import express from 'express'

const server = express()
const log = console.log

server.get( '/home', ( req, res ) =>
{
    res.send('You are at the HOME PAGE!')
})
server.get( '/json', ( req, res ) =>
{
    //* res.send( { JSON: true } )
    res.json( { JSON: true } )
} )
server.get( '/download', ( req, res ) =>
{
    res.download( "C:/Users/for_i/Desktop/TypeScript Assets/TS_in_pdf/Classes.pdf", 'downloaded.pdf', ( err ) =>
    {
        log( err )
        log("My error has catched!")
    })
} )
server.get( '(.*)', ( req, res ) =>
{
    res.redirect( 301, '/home' ) //! default - 302
})
server.listen( 8000, () => log( 'listening on port: 8000' ) )
