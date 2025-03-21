import express from 'express'

const userRouter = express.Router()
const log = console.log
userRouter.use( ( _req, _res, next ) =>
{
    log( 'PRE - MIDDLEWARE!' )
    next()
} )
userRouter.get('/error', ( req, _res, ) =>
{
    if ( req.url === '/error' ) throw new Error( "Handle ERROR" )
    else throw new Error()

} )
userRouter.get( '/', ( req, res ) =>
{
    res.send( 'You are on our site!')
})
userRouter.get( '/user', ( req, res ) =>
{
    res.send( 'Welcome to our site, User!')
})
userRouter.post( '/user/login', ( req, res ) =>
{
    res.send('You have been logged!')
} )
userRouter.post('/user/register', ( req, res ) =>
{
    res.send('Thanks for registration!')
} )

export { userRouter }