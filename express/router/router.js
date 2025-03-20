import express from 'express'

const userRouter = express.Router()

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