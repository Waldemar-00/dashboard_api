import express, { Express } from 'express'
import { userRouter } from './routers/user'
import { Server } from 'http'
import chalk from 'chalk'
import { LoggerService } from './services/logger'
export class App
{
    private server: Express = express()
    public serverRefference: Server
    constructor ( private logger: LoggerService,  public port: number = 8000  )
    {
        this.port = port
        this.logger = logger
    }

    useRouter ()
    {
        this.server.use( '/', userRouter )
    }
    public async init ()
    {
        this.useRouter()
        this.serverRefference = this.server.listen( this.port )
        this.logger.info( `${ chalk.blue( 'port:' ) } ${ chalk.green( this.port ) }` )
    }
}