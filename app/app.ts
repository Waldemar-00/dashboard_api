import express, { Express } from 'express'
// import { userRouter } from './routers/user'
import { UserController } from './common/controllers/user'
import { Server } from 'http'
import chalk from 'chalk'
import { LoggerService } from './services/logger'
import { Exceptions } from './errors/exceptions'
export class App
{
    private server: Express = express()
    public serverRefference: Server
    constructor (
        private logger: LoggerService,
        private userController: UserController,
        private exceptions: Exceptions,
        public port: number = 8000 )

    {
        this.port = port
        this.logger = logger
        this.userController = userController
        this.exceptions = exceptions
    }

    useRouter ()
    {
        this.server.use( '/', this.userController.router )
    }
    exceptionFiters ()
    {
        this.logger.info('exception catching has started')
        this.server.use( this.exceptions.catch.bind( this.exceptions ) )
    }
    public async init ()
    {
        this.useRouter()
        this.exceptionFiters()
        this.serverRefference = this.server.listen( this.port )
        this.logger.info( `${ chalk.blue( 'port:' ) } ${ chalk.green( this.port ) }` )
    }
}