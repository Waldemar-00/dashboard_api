import express from 'express'
const log = console.log
const server = express()


server.get( '/cookies', ( req, res ) =>
{
    res.cookie( 'token', '123token987', {
        domain: '',       //? if '' - current domain
        path: '/',       //? for all pages
        secure: true,   //? only HTTPS
        httpOnly: true, //? you cannot get cookies in browser, it saves from XSS
        sameSite: 'strict',
        // sameSite: 'lax',
        // sameSite: 'none', //! only if being secure: true
        // signed: true, required settings for server.use(cookieParser(secretKey))
        // expires: new Date( Date.now()  + 100 * 60 * 60 * 24 * 2 ),
        maxAge: 60 * 60 * 24 * 2
    } )
    //! res.clearCookie('token', { path: '/', domain: '' } )
    res.setHeader( 'Content-Type', 'text/html' )
    res.send( '<h1>Cookies in Express!<h1>' )
} )
server.get( '/end', ( req, res ) =>
{
    res.end()
})
server.listen( 8000, () => log( 'listening on: 8000' ) )
