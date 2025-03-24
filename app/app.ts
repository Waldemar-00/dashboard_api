import express, { Express } from 'express'
import { userRouter, log } from './router'
import { Server } from 'http'
import chalk from 'chalk'
export class App
{
    private app: Express = express()
    server: Server
    constructor ( public port: number = 8000,  )
    {
        this.port = port
    }

    useRouter ()
    {
        this.app.use( '/', userRouter )
    }
    public async init ()
    {
        this.useRouter()
        this.server = this.app.listen( this.port, () => log( `${ chalk.blue( 'port:' ) } ${ chalk.green( this.port ) }` ) )
    }
}