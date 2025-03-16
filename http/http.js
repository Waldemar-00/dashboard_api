import http from 'http'

const log = console.log
const port = 8000
const host = '127.0.0.1'
const server = http.createServer( ( req, res ) =>
{
    //* code below is not good
    switch ( req.method )
    {
        case 'GET':
            switch ( req.url ) {
                case '/hello':
                    res.statusCode = 200
                    res.setHeader( 'Content-Type', 'text/plain' )
                    res.end( 'Hello from server!' )
                    break
                default:
                    break
            }
            break
        default:
            break
    }
    //* code abow is not good
 } )

server.listen( port, host, () => log( `Server is open on ${ host }:${ port }` ) )
