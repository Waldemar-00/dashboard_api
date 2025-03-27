import express, { Express } from 'express'
// import { userRouter } from './routers/user'
import { UserController } from './common/controllers/user'
import { Server } from 'http'
import chalk from 'chalk'
import { LoggerService } from './services/logger'
export class App
{
    private server: Express = express()
    public serverRefference: Server
    constructor (
        private logger: LoggerService,
        private userController: UserController,
        public port: number = 8000 )
    {
        this.port = port
        this.logger = logger
        this.userController = userController
    }

    useRouter ()
    {
        this.server.use( '/', this.userController.router )
    }
    public async init ()
    {
        this.useRouter()
        this.serverRefference = this.server.listen( this.port )
        this.logger.info( `${ chalk.blue( 'port:' ) } ${ chalk.green( this.port ) }` )
    }
}