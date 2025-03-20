import express from 'express'
import { userRouter } from './router.js'

const server = express()
server.use( '/', userRouter )

server.listen( 8000, () => console.log( 'listening on: 8000' ) )
